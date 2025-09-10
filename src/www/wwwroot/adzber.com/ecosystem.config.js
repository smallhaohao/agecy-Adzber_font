module.exports = {
  apps: [{
    name: 'adzber-backend',
    script: 'server/index.ts',
    cwd: '/www/wwwroot/adzber.com',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      // AIPA_API_DOMAIN: 'https://adzber.com',
      AIPA_API_DOMAIN: 'http://106.52.177.147',
      PORT: 3001
    },
    log_file: '/www/wwwlogs/adzber-backend.log',
    out_file: '/www/wwwlogs/adzber-backend-out.log',
    error_file: '/www/wwwlogs/adzber-backend-error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    restart_delay: 3000,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};
