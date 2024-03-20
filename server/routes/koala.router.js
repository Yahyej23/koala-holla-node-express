const express = require("express");
const koalaRouter = express.Router();
const pool = require("./pool"); // Assuming pool.js is in the same directory

// GET all Koalas
koalaRouter.get("/", (req, res) => {
  pool
    .query("SELECT * FROM koalas;")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error("Error fetching Koalas", error);
      res.sendStatus(500);
    });
});

// POST a new Koala
koalaRouter.post("/koalas", (req, res) => {
  const { name, age, favorite_color, ready_to_transfer, notes } = req.body;

  // Validate required fields
  if (
    !name ||
    !age ||
    !favorite_color ||
    ready_to_transfer === undefined ||
    !notes
  ) {
    return res.status(400).send("Missing required fields");
  }

  const queryText =
    "INSERT INTO koalas (name, age, favorite_color, ready_to_transfer, notes) VALUES ($1, $2, $3, $4, $5);";
  pool
    .query(queryText, [name, age, favorite_color, ready_to_transfer, notes])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error("Error adding Koala", error);
      res.sendStatus(500);
    });
});

// PUT (update) a Koala's ready_to_transfer status
koalaRouter.put("/:id", (req, res) => {
  const koalaId = req.params.id;
  const readyForTransfer = req.body.ready_to_transfer;

  // Validate input
  if (readyForTransfer === undefined) {
    return res.status(400).send("Missing 'ready_to_transfer' field");
  }

  const queryText = "UPDATE koalas SET ready_to_transfer = $1 WHERE id = $2;";
  pool
    .query(queryText, [readyForTransfer, koalaId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error updating Koala", error);
      res.sendStatus(500);
    });
});

// DELETE a Koala
koalaRouter.delete("/:id", (req, res) => {
  const koalaId = req.params.id;

  const queryText = "DELETE FROM koalas WHERE id = $1;";
  pool
    .query(queryText, [koalaId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error deleting Koala", error);
      res.sendStatus(500);
    });
});

module.exports = koalaRouter;
