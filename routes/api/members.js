const express = require("express");
let members = require("../../Members");
const uuid = require("uuid");

const router = express.Router();

// get members
router.get("/", (req, res) => {
  res.json(members);
});

// get single member
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const member = members.find(entry => entry.id === parseInt(id));
  if (member) {
    res.json(member);
  } else {
    res.status(400).json({ msg: `member ${id} not found` });
  }
});

// Create member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include name and email" });
  }
  members.push(newMember);
  res.json(members);
  //res.redirect("/");
});

// Update member
router.put("/", (req, res) => {
  const id = req.body.id;
  const member = members.find(entry => entry.id === parseInt(id));
  if (!member) {
    return res.status(400).json({ msg: "Member not found" });
  }
  member.name = req.body.name || member.name;
  member.email = req.body.email || member.email;
  member.status = req.body.status || member.status;

  res.status(200).json({ msg: "success", member: member });
});

// Delete member
router.delete("/", (req, res) => {
  const id = req.body.id;
  members = members.filter(member => member.id !== id);
  res.json(members);
});

module.exports = router;
