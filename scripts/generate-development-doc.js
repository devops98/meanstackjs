var fs = require('fs')
var glob = require('glob')
var files = glob.sync('./server/**/*.js')
var documentation = require('documentation')
files.unshift('./server.mean.js')
documentation.build(['./server.mean.js'], {})
    .then(documentation.formats.md)
    .then(res => {
      fs.writeFileSync('./documentation/Development-Document.md', res)
    })