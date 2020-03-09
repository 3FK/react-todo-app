const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./app/db/todo.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});
 
// db.serialize(() => {
//   db.each(`SELECT ID, LABEL, IS_COMPLETE, IS_DELETE
//            FROM TODOS`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row.ID + "\t" + row.LABEL + "\t" + row.IS_COMPLETE + "\t" + row.IS_DELETE);
//   });
// });
 
// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

module.exports = db;