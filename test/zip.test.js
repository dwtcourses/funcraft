'use strict';

const path = require('path');
const fs = require('fs');

const expect = require('expect.js');

const zip = require('../lib/zip');

describe('zip', () => {
  it.skip('should ok', async function () {
    var func = {
      codes: [
        'file1.txt'
      ]
    };
    var base64 = await zip.compress(func, path.join(__dirname, 'figures'), 'local');
    require('fs').writeFileSync('./test.zip', base64, 'base64');
    expect(base64).to.be('UEsDBAoAAAAAADUpD0tB5KmyDQAAAA0AAAAJAAAAZmlsZTEudHh0SGVsbG8gd29ybGQhClBLAQIUAAoAAAAAADUpD0tB5KmyDQAAAA0AAAAJAAAAAAAAAAAAAAAAAAAAAABmaWxlMS50eHRQSwUGAAAAAAEAAQA3AAAANAAAAAAA');
  });

  it.skip('zip file', async function () {
    var base64 = await zip.file(path.join(__dirname, 'figures', 'file1.txt'));
    console.log(base64);
  });

  it.skip('zip folder', async function () {
    var base64 = await zip.file(path.join(__dirname, 'figures'));
    console.log(base64);
  });

  it.skip('zip folder with symlink', async function () {
    var base64 = await zip.file(path.join('examples', 'helloworld'));

    fs.writeFile('base64.txt', base64, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log('The file was saved!');
    });
  });
});