FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force && \
    rm -rf node_modules && \
    npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html/
COPY www.adzber.com.key /usr/share/nginx/ssl/www.adzber.com.key
COPY www.adzber.com_bundle.crt /usr/share/nginx/ssl/www.adzber.com_bundle.crt
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]