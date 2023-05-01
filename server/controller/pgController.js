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
    const { content, linename, userID } = req.body;

    const postQuery = await client.query(
      'INSERT INTO message (content, train_user_id, linename) VALUES ($1, $2, $3);',
      [ content, userID, linename ]
    );
    // console.log(postQuery);

    return next();
  },

  getTrain: async (req, res, next) => { // pulling one train from database and its messages
    const response = await client.query('SELECT * FROM message LEFT JOIN train ON message.linename = train.linename;');
    // console.log("Response Rows0: ", response.rows[ 0 ])
    // Array of objects 
    res.locals.list = response.rows;
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
      [ id ]
    );
    console.log(response);
    return next();
  },
};

module.exports = pgController;
