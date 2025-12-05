import http from "http";

import { Server as SocketIOServer } from "socket.io";

import { createApp } from "./app";
import logger from "./utils/logger";
import { socketConfig } from "./config/socket.config";
import { initializeSocketHandlers } from "./socket";
const PORT = process.env.PORT || 4000;

export const startServer = async (): Promise<void> => {
  const app = createApp();
  const httpServer = http.createServer(app);

  const io = new SocketIOServer(httpServer, socketConfig);
  initializeSocketHandlers(io);
  httpServer.listen(PORT, () => {
    logger.info(`🚀 Server running on port ${PORT}`);
    logger.info(`📡 Socket.IO server ready`);
    logger.info(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
    logger.info(`🔗 Health check: http://localhost:${PORT}/health`);
  });
};
