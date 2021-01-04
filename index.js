  const app = require('./src/index.js')
  const {
    conn
  } = require('./src/db.js');
  // Syncing all the models at once.
  // { force: true }
  
  conn.sync().then(() => {
    app.listen(3000, () => {
      console.log('%s listening at 3000'); // eslint-disable-line no-console
    });
  });

/*   
(async () => {
    await sequelize.sync({ force: true });
    console.log('bla')
    // Code here
    
  })(); */