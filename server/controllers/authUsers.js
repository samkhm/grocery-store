const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, password, address } = req.body;

    const cleaned = {
      first_name: first_name?.trim(),
      last_name: last_name?.trim(),
      email: email?.trim(),
      phone: phone?.trim(),
      address: address?.trim(),
      password: password?.trim(),
    };

    if (Objects.values(cleaned).some((v) => !v)) {
      return res
        .status(400)
        .json({ success: false, message: "All inputs required!" });
    }

    if (password.length < 6) {
      return res
        .status(401)
        .json({ success: false, message: "Password too short!" });
    }

    const userExist = await User.findOne({
      $or: [{ email: email.trim() }, { phone: phone.trim() }],
    });

    if (userExist) {
      return res.status(400).json({
        message:
          userExist.email === email ? "Email registered" : "Phone number taken",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = {
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password: hashedPassword,
      address: address.trim(),
    };

    const savedUser = await User.create(data);

    const token = jwt.sign(
      { id: savedUser._id, role: savedUser.role, email: savedUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "24",
      },
    );

    const safeUser = savedUser.toObject();
    delete safeUser.password;

    return res.status(200).json({
      success: true,
      token,
      user: safeUser,
      massage: "User created!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
