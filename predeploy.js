const fs = require('fs');

fs.writeFileSync('dist/CNAME', 'phpcs-rulesets.andreasfurster.nl');
console.log('Added CNAME file for Github pages');
