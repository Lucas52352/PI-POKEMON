const app = require('./src/app')
const { conn } = require('./src/db.js')

// Syncing all the models at once.
conn.sync({ force: false })
.then(() => {
  app.listen(3001, () => {
  console.log('listening at 3001'); // eslint-disable-line no-console
  });
});

