const fs = require('fs');

fs.writeFileSync('dist/CNAME', 'phpcs-ruleset-builder.andreasfurster.nl');
console.log('Added CNAME file for Github pages');
