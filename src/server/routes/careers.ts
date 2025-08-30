/**
 * 职位申请相关的路由处理
 * 负责处理用户职位申请表单的提交和存储功能
 */

import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import type { CareerApplication, ApiResponse } from '../../shared/types';

const careers = new Hono();

// 职位申请表单验证规则
const careerApplicationSchema = z.object({
  firstName: z.string().min(1, '名字不能为空'),
  lastName: z.string().min(1, '姓氏不能为空'),
  email: z.string().email('请输入有效的邮箱地址'),
  linkedin: z.string().min(1, 'LinkedIn链接不能为空'),
  notes: z.string().min(1, '备注信息不能为空'),
  region: z.string().min(1, '请选择申请地区'),
  resumeUrl: z.string().optional()
});

// 提交职位申请
careers.post('/career-applications', zValidator('json', careerApplicationSchema), async (c) => {
  console.log('Career application submission started');
  
  try {
    const applicationData: CareerApplication = await c.req.json();
    console.log('Career application data received:', { 
      firstName: applicationData.firstName,
      lastName: applicationData.lastName,
      email: applicationData.email,
      region: applicationData.region
    });

    // 存储到数据库
    const applicationRecord = {
      ...applicationData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const collection = db.collection('407a43f7_career_applications');
    const insertResult = await collection.insertOne(applicationRecord);
    console.log('Career application saved to database:', insertResult.insertedId);

    // 发送邮件通知管理员
    try {
      await sendCareerApplicationNotification(applicationData);
      console.log('Career application notification email sent successfully');
    } catch (emailError) {
      console.error('Failed to send career application notification:', emailError.message);
      // 邮件发送失败不影响主流程
    }

    const response: ApiResponse = {
      success: true,
      message: '感谢您的申请，我们会尽快审核并与您联系！'
    };

    console.log('Career application submission completed successfully');
    return c.json(response);

  } catch (error) {
    console.error('Career application submission error:', error.message);
    
    const response: ApiResponse = {
      success: false,
      message: '提交失败，请稍后重试'
    };
    
    return c.json(response, 500);
  }
});

// 发送职位申请通知邮件
async function sendCareerApplicationNotification(applicationData: CareerApplication) {
  console.log('Career application notification:', {
    subject: `新的职位申请 - ${applicationData.firstName} ${applicationData.lastName}`,
    content: `
      申请人: ${applicationData.firstName} ${applicationData.lastName}
      邮箱: ${applicationData.email}
      LinkedIn: ${applicationData.linkedin}
      申请地区: ${applicationData.region}
      备注信息: ${applicationData.notes}
      简历链接: ${applicationData.resumeUrl || '未提供'}
    `
  });
}

export default careers;
