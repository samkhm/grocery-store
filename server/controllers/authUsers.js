const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    const cleaned = {
      first_name: firstName?.trim(),
      last_name: lastName?.trim(),
      email: email?.trim(),
      phone: phoneNumber?.trim(),
      password: password?.trim(),
    };

    // Validate required fields only
    if (Object.values(cleaned).some((v) => !v)) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    // Password rule
    if (cleaned.password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // Check existing user
    const userExist = await User.findOne({
      $or: [
        { email: cleaned.email },
        { phone: cleaned.phone }
      ],
    });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message:
          userExist.email === cleaned.email
            ? "Email already registered"
            : "Phone number already taken",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(cleaned.password, 10);

    // Create user (NO address yet)
    const savedUser = await User.create({
      first_name: cleaned.first_name,
      last_name: cleaned.last_name,
      email: cleaned.email,
      phone: cleaned.phone,
      password: hashedPassword,
      address: [], // optional default
    });

    // Generate token
    const token = jwt.sign(
      {
        id: savedUser._id,
        role: savedUser.role,
        email: savedUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Safe response
    const safeUser = {
      _id: savedUser._id,
      first_name: savedUser.first_name,
      last_name: savedUser.last_name,
      email: savedUser.email,
      phone: savedUser.phone,
      role: savedUser.role,
      address: savedUser.address,
      createdAt: savedUser.createdAt,
    };

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: safeUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};