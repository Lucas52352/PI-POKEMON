const app = require('./src/app')
const { conn } = require('./src/db.js')

conn.sync({ force: false })
.then(() => {
  app.listen(3001, () => {
  console.log('listening on Port 3001');
  });
});

