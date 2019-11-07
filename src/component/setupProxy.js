const proxy = require("http-proxy-middleware");
console.log("proxy", proxy);
//解决跨域
module.exports = function(app) {
  app.use(
    proxy("/music", {
        target: "http://chentian.ltd:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/music": "/"
        }
      }
    )
  ),
    app.use(
      proxy("/api", {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
		pathRewrite:{
			'^/api':"/"
		}
      })
    );
};
