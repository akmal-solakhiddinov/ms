import { ServerOptions } from "socket.io";

export const socketConfig: Partial<ServerOptions> = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  pingTimeout: 6000,
  pingInterval: 2500,
  transports: ["websocket", "polling"],
  upgradeTimeout: 10000,
  maxHttpBufferSize: 1e6,
  allowUpgrades: true,
  cookie: false,
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000,
    skipMiddlewares: true,
  },
};
