const mogoose = require("mongoose");

const userSchema = new mogoose.Schema(
  {
    firstname: {
      type: String,
      required: "First name is required",
    },
    lastname: {
      type: String,
      required: "Last name is required",
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true,
    },
    age: {
      type: Number,
      required: "Age is required",
    },
  },
  {
    timestamps: true,
  }
);

const User = mogoose.model("Employee", userSchema);

module.exports = User;
