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
        target: "http://chentian.ltd/hot/",
        changeOrigin: true,
		pathRewrite:{
			'^/api':"/"
		}
      })
    );
};
