const { createProxyMiddleware } = require("http-proxy-middleware");

console.log("Proxy setup is being executed");

module.exports = function (app) {
  // Proxy for Node.js backend (auth, users, tasks)
  app.use(
    "/api/auth",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/users",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/tasks",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request:", req.url);
      },
    })
  );

  // Proxy for Spring Boot backend (events, participants)
  app.use(
    "/api/events",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/participants",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};
