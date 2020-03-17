const express = require("express");
const members = require("../../Members");
const uuid = require('uuid');

const router = express.Router();

// get members
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


// Create member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active' ,
  }
  if(!newMember.name || !newMember.email) {
    return res.status(400).json({msg: 'Please include name and email'});
  }
  members.push(newMember);
  res.json(members);
});

module.exports = router;