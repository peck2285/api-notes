const express = require("express");
var router = express.Router();
var noteController = require("../controllers/noteController");

// Liste de Routes
router.get("/", (req, res) => {
  res.status(200).send("Api connectée...");
});

router.get("/notes", noteController.list);
router.post("/notes", noteController.Add);
router.put("/notes/:id", noteController.Update);
router.delete("/notes/:id", noteController.Delete);

module.exports = router;
