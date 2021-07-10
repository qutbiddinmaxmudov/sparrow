const fs = require('fs')
const path = './gulp/tasks'
const arrayPath = fs.readdirSync(path)
  .map(fileName => path + '/' + fileName)
module.exports = arrayPath