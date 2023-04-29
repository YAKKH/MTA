/* eslint-disable comma-dangle */
/* eslint-disable no-tabs */
/* eslint-disable indent */
const pg = require('pg');

const connectionString =
  'postgres://jupnvtuj:7rcS436BwwosbuGBmXM7l0pUQE2DHvrv@lallah.db.elephantsql.com/jupnvtuj';

const client = new pg.Client({ connectionString });

client.connect();

const pgController = {
  postMessage: async (req, res, next) => { // inserting a new message in the db
    const { message, trainID, userID } = req.body;
    const response = await client.query(
      'INSERT INTO message (content, train_user_id, train_id) VALUES ($1, $2, $3)',
      [message, userID, trainID]
    );
    console.log(response);
    console.log('hello');
    return next();
  },

  getTrain: async (req, res, next) => { // pulling one train from database and its messages
    const response = await client.query('SELECT * FROM message LEFT JOIN train ON message.train_id = train._id');
    res.locals.list = response;
    return next();
  },

  // updateList: async (req, res, next) => {
  //   const id = req.params.id;
  //   const { message } = req.body;
  //   const response = await client.query(
  //     'UPDATE example_table SET message = "Hello, everyone!" WHERE id = 1;',
  //     [message, id]
  //   );
  //   console.log(response);
  //   return next();
  // },

  deleteListItem: async (req, res, next) => {
    const id = req.params.id;
    const response = await client.query(
      'DELETE FROM example_table WHERE id = 1;',
      [id]
    );
    console.log(response);
    return next();
  },
};

module.exports = pgController;
