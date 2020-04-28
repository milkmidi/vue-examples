
const base = {
  APP_ENV: process.env.APP_ENV,
  DEV_MODE: process.env.NODE_ENV === 'development',
  CUSTOM_DATA: 'development',
};

const config = {
  development: {
  },
  stage: {
    CUSTOM_DATA: 'stage',
  },
  production: {
    CUSTOM_DATA: 'production',
  },
};
module.exports = {
  ...base,
  ...config[process.env.APP_ENV],
};
