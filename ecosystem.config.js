module.exports = {
  apps : [{
    name: 'toolbox',
    script: './node_modules/.bin/nuxt',
    args: 'start',
    instances: 2,
    exec_mode: 'cluster',
    wait_ready: true,
    listen_timeout: 5000,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
