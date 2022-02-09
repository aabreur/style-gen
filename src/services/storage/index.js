const fs = require('fs');

// this should be writing on AWS S3
exports.saveCSS = (filename, string) => {
    fs.writeFileSync(`${__dirname}/../../public/css/${filename}.css`, string);
    return `css/${filename}.css`
}