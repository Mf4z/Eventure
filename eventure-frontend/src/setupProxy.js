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

  // Proxy for the protected Users API
  app.use(
    "/api/users",
    createProxyMiddleware({
      target: "http://localhost:8090/apiman-gateway/Eventure-default/users/1.1",
      changeOrigin: true,
      pathRewrite: {
        "^/api/users": "/", // Rewrite the path to match the external API's structure
      },
      onProxyReq: (proxyReq, req, res) => {
        const apiKey = process.env.REACT_APP_API_KEY;
        proxyReq.setHeader("Authorization", `Apikey ${apiKey}`);
        console.log("Proxying request to protected API:", req.url);
      },
    })
  );

  // Proxy for the external tasks API
  app.use(
    "/api/tasks",
    createProxyMiddleware({
      target: "http://localhost:8090/apiman-gateway/Eventure-default/tasks/1.0",
      changeOrigin: true,
      pathRewrite: {
        "^/api/tasks": "/", // Rewrite the path to match the external API's structure
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request to external API:", req.url);
      },
    })
  );

  // Proxy for the external events API
  app.use(
    "/api/events",
    createProxyMiddleware({
      target:
        "http://localhost:8090/apiman-gateway/Eventure-default/events/1.0",
      changeOrigin: true,
      pathRewrite: {
        "^/api/events": "/", // Rewrite the path to match the external API's structure
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request to external API:", req.url);
      },
    })
  );

  // Proxy for the external participants API
  app.use(
    "/api/participants",
    createProxyMiddleware({
      target:
        "http://localhost:8090/apiman-gateway/Eventure-default/participants/1.0",
      changeOrigin: true,
      pathRewrite: {
        "^/api/participants": "/", // Rewrite the path to match the external API's structure
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request to external API:", req.url);
      },
    })
  );
};
