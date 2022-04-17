var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const User = require("../model/Users");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Add user
router.post("/add", (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    age: req.body.age,
  });

  //save new user in database
  user
    .save()
    .then((docs) => {
      console.log(docs);
      return res.status(200).json(docs);
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Error in adding new user",
        success: false,
        error: err.message,
      });
    });
});

// GET single user by Id

router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

// update user data
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    function (err, data) {
      if (err) {
        res.json(err);
      } else {
        res.json({ message: "user data updated" });
      }
    }
  );
});

//Delete user by id
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      console.log("deleted");
      res.json({ message: "user data deleted" });
    }
  });
});
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
