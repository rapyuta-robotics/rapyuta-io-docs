var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var path = require('path');
var dir = require('node-dir');
var CryptoJS = require('crypto-js');
var async = require('async');

var directory = argv.directory;
var passphrase = argv.passphrase;

var passwordTemplate = fs.readFileSync(
  path.join(__dirname, 'password_template.html')
).toString();

try {
  dir.files(
    path.join(__dirname, '../', directory),
    function(err, files) {
      if (err) throw err;
      files = files.filter(function (file) {
        return file.indexOf('.html') > -1;
      });


      async.eachSeries(files, function(filename, cb) {
          fs.readFile(filename, function (err, data) {
            if (err) throw err;
            var unencrypted = data.toString();

            var encrypted = CryptoJS.AES.encrypt(unencrypted, passphrase);
            var hmac = CryptoJS.HmacSHA256(encrypted.toString(), CryptoJS.SHA256(passphrase)).toString();
            var encryptedMsg = hmac + encrypted;

            var templateToRender = passwordTemplate.replace('{encrypted}', encryptedMsg);
            fs.writeFile(filename, templateToRender, function(){
              cb(err);
            });
          });
        },
        function(err) {
          if (err) throw err;
          console.log('Fin');
        }
      );
    }
  );
}
catch(err) {
  console.error(err);
}