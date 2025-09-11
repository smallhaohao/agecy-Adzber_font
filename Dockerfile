# 构建阶段：使用 Alpine 镜像并补充编译工具
FROM node:18 AS builder

# 安装 Alpine 环境下编译原生模块所需的工具
#RUN apk add --no-cache \
#  g++ \
#  make \
#  python3 \
#  && rm -rf /var/cache/apk/*

WORKDIR /app

# 复制依赖文件
COPY package*.json ./

# 安装依赖（强制重新构建原生模块）
RUN npm install --force

# 复制项目源代码
COPY . .

# 执行构建
RUN npm run build


# 部署阶段：使用 Nginx 轻量镜像
FROM nginx:1.27-alpine

# 移除默认 Nginx 配置
RUN rm /etc/nginx/conf.d/default.conf

# 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 复制构建产物到 Nginx 静态目录
COPY --from=builder /app/dist /usr/share/nginx/html/

# 复制 SSL 证书（确保这些文件在构建上下文根目录存在）
COPY www.adzber.com.key /usr/share/nginx/ssl/www.adzber.com.key
COPY www.adzber.com_bundle.crt /usr/share/nginx/ssl/www.adzber.com_bundle.crt

# 暴露端口
EXPOSE 80 443

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
