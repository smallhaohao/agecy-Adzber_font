import { Hono } from 'hono';
import { cors } from 'hono/cors';
import contactRoutes from './routes/contacts';
import careerRoutes from './routes/careers';
import adminRoutes from './routes/admin';

const rootApp = new Hono();

// 中间件
rootApp.use('*', cors());

// 健康检查
rootApp.get('/api/health', (c) => {
  console.log('Health check requested');
  return c.json({ status: 'ok' });
});

// 注册路由
rootApp.route('/api', contactRoutes);
rootApp.route('/api', careerRoutes);
rootApp.route('/api', adminRoutes);

console.log('Server initialized successfully');

export default rootApp;