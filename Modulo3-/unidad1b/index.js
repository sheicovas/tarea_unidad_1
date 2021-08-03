var moment = require('moment');

moment.locale('es');

console.log('Naci ' +moment('11/05/1991','DD/MM/YYYY').fromNow());