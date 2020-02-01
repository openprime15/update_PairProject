const con = require("./mysql_con");
const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  console.log("Connected!");
  const name = req.body.name;
  const email = req.body.email;
  const pw = req.body.pw;
  const usr_type = req.body.usr_type;
  const phone = req.body.phone;
  const address = req.body.address;
  const sql = `INSERT INTO pp_members (name, email, pw, usr_type, phone, address) VALUES ('${name}', '${email}', '${pw}', '${usr_type}', ${phone}, '${address}')`;
  con.query(sql, function(err, result) {
    if (err) {
      console.log("insert fail", err);
      res.json({ message: "회원가입 실패" });
    } else {
      console.log("1 record inserted");
      res.json({ message: "회원가입 되었습니다." });
    }
  });
});

module.exports = router;
