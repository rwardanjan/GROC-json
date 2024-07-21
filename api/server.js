const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use middleware
server.use(cors());
server.use(middlewares);

// Setup authentication middleware
const rules = auth.rewriter({
  // Define your access control rules
});
server.use(rules);
server.use(auth);

server.use(router);

module.exports = server;
