module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "devServer": {
    "open": true,
    "host": "localhost",
    "port": 8080,
    "https": false,
    "hotOnly": false,
    "proxy": {
      "": {
        "target": "http://localhost:9915",
        "ws": true,
        "changOrigin": true,
        "pathRewrite": {
          "": ""
        }
      }
    }
  }
}