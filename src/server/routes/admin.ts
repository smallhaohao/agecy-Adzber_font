/**
 * 管理员认证和数据管理路由
 * 提供登录验证、统计数据查询和列表管理功能
 */

import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import type { ApiResponse } from '../../shared/types';

const admin = new Hono();

// 简单的token存储（生产环境建议使用Redis）
const tokenStore = new Map<string, { username: string; expiresAt: number }>();

// 登录验证模式
const loginSchema = z.object({
  username: z.string().min(1, '用户名不能为空'),
  password: z.string().min(1, '密码不能为空')
});

// 管理员登录
admin.post('/admin/login', zValidator('json', loginSchema), async (c) => {
  console.log('Admin login attempt');
  
  try {
    const { username, password } = await c.req.json();
    console.log('Login request for username:', username);

    // 查询管理员
    const adminCollection = db.collection('407a43f7_admins');
    const adminUser = await adminCollection.findOne({ username });

    if (!adminUser) {
      console.log('Admin not found:', username);
      return c.json({
        success: false,
        message: '用户名或密码错误'
      }, 401);
    }

    // 简化密码验证（生产环境应使用bcrypt）
    if (password !== 'admin123') {
      console.log('Invalid password for admin:', username);
      return c.json({
        success: false,
        message: '用户名或密码错误'
      }, 401);
    }

    // 生成token
    const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const expiresAt = Date.now() + (24 * 60 * 60 * 1000); // 24小时
    
    tokenStore.set(token, {
      username: adminUser.username,
      expiresAt
    });

    console.log('Admin login successful:', username);
    return c.json({
      success: true,
      message: '登录成功',
      data: {
        token,
        expiresIn: expiresAt,
        admin: {
          id: adminUser._id,
          username: adminUser.username,
          email: adminUser.email,
          role: adminUser.role
        }
      }
    });

  } catch (error) {
    console.error('Admin login error:', error.message);
    return c.json({
      success: false,
      message: '登录失败'
    }, 500);
  }
});

// 管理员登出
admin.post('/admin/logout', async (c) => {
  const token = c.req.header('Authorization');
  if (token) {
    tokenStore.delete(token);
  }
  return c.json({
    success: true,
    message: '登出成功'
  });
});

// Token验证中间件
const authMiddleware = async (c: any, next: any) => {
  const token = c.req.header('Authorization');
  
  if (!token) {
    return c.json({
      success: false,
      message: '需要登录'
    }, 401);
  }

  const tokenInfo = tokenStore.get(token);
  if (!tokenInfo || Date.now() > tokenInfo.expiresAt) {
    tokenStore.delete(token);
    return c.json({
      success: false,
      message: '登录已过期'
    }, 401);
  }

  await next();
};

// 获取统计数据
admin.get('/admin/dashboard/stats', authMiddleware, async (c) => {
  console.log('Getting dashboard stats');
  
  try {
    const contactsCollection = db.collection('407a43f7_contacts');
    const careersCollection = db.collection('407a43f7_career_applications');

    // 统计总数
    const totalContacts = await contactsCollection.countDocuments({});
    const totalApplications = await careersCollection.countDocuments({});

    // 统计今日新增
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const newContacts = await contactsCollection.countDocuments({
      createdAt: { $gte: today }
    });

    const pendingApplications = await careersCollection.countDocuments({
      status: 'pending'
    });

    const stats = {
      totalContacts,
      totalApplications,
      newContacts,
      pendingApplications
    };

    console.log('Dashboard stats:', stats);
    return c.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Failed to get stats:', error.message);
    return c.json({
      success: false,
      message: '获取统计数据失败'
    }, 500);
  }
});

// 获取联系列表
admin.get('/admin/contacts', authMiddleware, async (c) => {
  console.log('Getting contacts list');
  
  try {
    const page = parseInt(c.req.query('page') || '1');
    const pageSize = parseInt(c.req.query('pageSize') || '10');
    const status = c.req.query('status');

    const filter: any = {};
    if (status) {
      filter.status = status;
    }

    const collection = db.collection('407a43f7_contacts');
    
    // 获取总数
    const total = await collection.countDocuments(filter);
    
    // 获取分页数据
    const skip = (page - 1) * pageSize;
    const contacts = await collection
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize)
      .toArray();

    // 转换数据格式
    const formattedContacts = contacts.map(contact => ({
      id: contact._id.toString(),
      name: contact.name,
      email: contact.email,
      company: contact.company,
      serviceType: contact.serviceType,
      details: contact.details,
      status: contact.status || 'new',
      createdAt: contact.createdAt
    }));

    return c.json({
      success: true,
      data: {
        contacts: formattedContacts,
        total,
        page,
        pageSize
      }
    });

  } catch (error) {
    console.error('Failed to get contacts:', error.message);
    return c.json({
      success: false,
      message: '获取联系列表失败'
    }, 500);
  }
});

// 获取职位申请列表
admin.get('/admin/career-applications', authMiddleware, async (c) => {
  console.log('Getting career applications list');
  
  try {
    const page = parseInt(c.req.query('page') || '1');
    const pageSize = parseInt(c.req.query('pageSize') || '10');
    const status = c.req.query('status');
    const region = c.req.query('region');

    const filter: any = {};
    if (status) {
      filter.status = status;
    }
    if (region) {
      filter.region = region;
    }

    const collection = db.collection('407a43f7_career_applications');
    
    // 获取总数
    const total = await collection.countDocuments(filter);
    
    // 获取分页数据
    const skip = (page - 1) * pageSize;
    const applications = await collection
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize)
      .toArray();

    // 转换数据格式
    const formattedApplications = applications.map(app => ({
      id: app._id.toString(),
      firstName: app.firstName,
      lastName: app.lastName,
      email: app.email,
      linkedin: app.linkedin,
      notes: app.notes,
      region: app.region,
      resumeUrl: app.resumeUrl,
      status: app.status || 'pending',
      createdAt: app.createdAt
    }));

    return c.json({
      success: true,
      data: {
        applications: formattedApplications,
        total,
        page,
        pageSize
      }
    });

  } catch (error) {
    console.error('Failed to get career applications:', error.message);
    return c.json({
      success: false,
      message: '获取申请列表失败'
    }, 500);
  }
});

export default admin;
