const router = require("express").Router();
router.get("/chat", (req, res) => {
  const username = req.query.username;
  io.emit("joined", username);
  res.render("../templates/chat", { username });
});
router.get("/", (req, res) => {
  res.render("../templates/index");
});
module.exports = router;
