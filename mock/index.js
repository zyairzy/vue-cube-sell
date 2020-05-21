const mockJson = require('./data.json')
const seller = mockJson.seller
const goods = mockJson.goods
const ratings = mockJson.ratings

module.exports = function (app) {
  app.get('/api/seller', function (req, res) {
    res.json({
      errno: 0,
      data: seller
    })
  })
  app.get('/api/goods', function (req, res) {
    res.json({
      errno: 0,
      data: goods
    })
  })
  app.get('/api/ratings', function (req, res) {
    res.json({
      errno: 0,
      data: ratings
    })
  })
}
