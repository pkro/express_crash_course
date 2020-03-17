const express = require("express");
const members = require("../../Members");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(members);
});

// get single member
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const member = members.find(entry => entry.id === parseInt(id))
  if(member) {
    res.json(member);
  } else {
    res.status(400).json({msg: `member ${id} not found`});
  }
});

module.exports = router;