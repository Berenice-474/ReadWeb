const express = require('express');
const app = express();
const morgan = require('morgan');
const { getHeapSpaceStatistics } = require('v8');

//setting
app.set('port',process.env.PORT || 3000);
// el process es en caso de que haya algun puerto definido

//midlewares
app.use(morgan('dev'));
// si ponemos combined en vez de dev morgan me da un detalle mas largo sobre la peticion
app.use(express.json()); // permite a mi servidor empezar a recibir y comprender formatos json
app.use(express.urlencoded({extended:false}));
app.set('json spaces',2);

//router
app.use(require('./routes/index'))

//starting the server
app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`)
})









//ejecuto ---> node src/index.js en la consola para verificar que escucha
//morgan es u middleware que me permite ver por consola lo que va  llegando al servidor