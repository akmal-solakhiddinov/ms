export const SocketEvents = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  ERROR: "error",

  MESSAGE: {
    SEND: "message:send",
    NEW: "message:new",
    EDIT: "message:edit",
    UPDATED: "message:updated",
    DELETE: "message:delete",
    DELETED: "message:deleted",
    TYPING: "message:typing",
    STOP_TYPING: "message:stop_typing",
    SEEN: "message:seen",
    SEEN_UPDATED: "message:seen_updated"
  },

  ROOM: {
    CREATE: "room:create",
    CREATED: "room:created",
    JOIN: "room:join",
    LEAVE: "room:leave",
    LEFT: "room:left",
    UPDATE: "room:update"
  },

  USER: {
    ONLINE: "user:online",
    OFFLINE: "user:offline",
    STATUS: "user:status",
    PROFILE_UPDATE: "user:profile_update"
  },

  FRIEND: {
    REQUEST: "friend:request",
    ACCEPT: "friend:accept",
    REJECT: "friend:reject",
    CANCEL: "friend:cancel",
    UPDATE: "friend:update"
  },

  SYSTEM: {
    SERVER_RESTART: "",
    PING: "",
    PONG: ""
  }

}
