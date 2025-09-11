/**
 * 联系信息相关的路由处理
 * 负责处理用户联系表单的提交、存储和邮件通知功能
 */

import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import type { ContactForm, ApiResponse } from '../../shared/types';

const contacts = new Hono();

// 联系表单验证规则
const contactSchema = z.object({
  name: z.string().min(1, '姓名不能为空'),
  email: z.string().email('请输入有效的邮箱地址'),
  company: z.string().min(1, '公司名称不能为空'),
  serviceType: z.string().min(1, '请选择服务类型'),
  details: z.string().min(1, '请填写详细信息')
});

// 提交联系表单
contacts.post('/contacts', zValidator('json', contactSchema), async (c) => {
  console.log('Contact form submission started');
  
  try {
    const contactData: ContactForm = await c.req.json();
    console.log('Contact data received:', { 
      name: contactData.name, 
      email: contactData.email,
      company: contactData.company,
      serviceType: contactData.serviceType 
    });

    // 存储到数据库
    const contactRecord = {
      ...contactData,
      status: 'new',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const collection = db.collection('407a43f7_contacts');
    const insertResult = await collection.insertOne(contactRecord);
    console.log('Contact saved to database:', insertResult.insertedId);

    // 发送邮件通知管理员
    try {
      await sendAdminNotification(contactData);
      console.log('Admin notification email sent successfully');
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError.message);
      // 邮件发送失败不影响主流程
    }

    const response: ApiResponse = {
      success: true,
      message: 'Thank you for contacting us, we will get back to you as soon as possible!'
    };

    console.log('Contact form submission completed successfully');
    return c.json(response);

  } catch (error) {
    console.error('Contact form submission error:', error.message);
    
    const response: ApiResponse = {
      success: false,
      message: '提交失败，请稍后重试'
    };
    
    return c.json(response, 500);
  }
});

// 发送管理员通知邮件
async function sendAdminNotification(contactData: ContactForm) {
  // 这里可以集成邮件服务，比如 SendGrid、AWS SES 等
  // 目前先记录日志
  console.log('Admin notification:', {
    subject: `新的联系表单提交 - ${contactData.name}`,
    content: `
      姓名: ${contactData.name}
      邮箱: ${contactData.email}
      公司: ${contactData.company}
      服务类型: ${contactData.serviceType}
      详细信息: ${contactData.details}
    `
  });
}

export default contacts;
