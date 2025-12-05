export const appConfig = {
  port: parseInt(process.env.PORT || "4000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production ",
  logLevel: process.env.LOG_LEVEL || "info",
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes,
    max: 100,
  },
};
