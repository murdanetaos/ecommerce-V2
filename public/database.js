const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "eCommerceDB",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM USERS";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching data" });
    } else {
      res.json(result);
    }
  });
});
app.post('/contact', async (req, res) => {
  
    const {first_name, last_name, email, country, state } = req.body;
    console.log(`New Sign Up Form Submission: ${first_name}, ${last_name}, ${email}, ${country} ,${state}`);
    try {
      const conn = await pool.getConnection();
      const [rows, fields] = await conn.execute(
        'INSERT INTO users (first_name, last_name, email, country, state) VALUES (?, ?, ?, ?, ?)',
        [first_name, last_name, email, country, state]
      );
      console.log(`Inserted ${rows.affectedRows} row(s)`);
      conn.release();
      res.send('Thanks for signing up!');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
    });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });