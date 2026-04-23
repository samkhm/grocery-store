import React, { useState } from "react";
import type { FieldErrors } from "../dataType/fieldErrors";
import {
  emailChecker,
  formatPhone,
  getPasswordStrength,
  namesChecker,
  passwordChecker,
} from "../validators/validators";
import type { SignUpData } from "../dataType/userTypes";
import { signupUser } from "../services/user.api";

export default function Register({
  switchToLogin,
}: {
  switchToLogin: () => void;
}) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<FieldErrors>>({});
  const [message, setMessage] = useState("");

  const [formdata, setFormData] = useState<SignUpData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const submitData = async (payload: SignUpData): Promise<void> => {
    console.log("Submitting data:", payload);
    setIsLoading(true);
    try {
      const res = await signupUser(payload);
      setMessage(res.message);

      setTimeout(() => {
        switchToLogin();
      }, 2000);
    } catch (error: any) {
      setMessage(
        error?.response?.data?.message ||
          error.message ||
          "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (): Promise<void> => {   

    const newErrors: FieldErrors = {};

    const firstNameCheck = namesChecker(formdata.firstName);
    if (!firstNameCheck.valid) {
      newErrors.firstName = firstNameCheck.error;
    }

    const lastNameCheck = namesChecker(formdata.lastName);
    if (!lastNameCheck.valid) {
      newErrors.lastName = lastNameCheck.error;
    }

    const emailCheck = emailChecker(formdata.email);
    if (!emailCheck.valid) {
      newErrors.email = emailCheck.error;
    }
    const phoneCheck = formatPhone(formdata.phoneNumber);
    if (!phoneCheck.valid) {
      newErrors.phoneNumber = phoneCheck.error;
    }

    const passwordCheck = passwordChecker(formdata.password);
    if (!passwordCheck.valid) {
      newErrors.password = passwordCheck.error;
    }

    // ✅ confirm password validation
    if (formdata.password !== formdata.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      return;
    }

    setFieldErrors({});

    const payload: SignUpData ={
      firstName: formdata.firstName.trim(),
      lastName: formdata.lastName.trim(),
      email: formdata.email.trim().toLowerCase(),
      password: formdata.password, 
      phoneNumber: formatPhone(formdata.phoneNumber).formatted || formdata.phoneNumber.trim(),

    }
    await submitData(payload);
  };

  const strength = getPasswordStrength(formdata.password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faf7] px-4">
      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">
        
        {/* Left panel */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#4E8EA2] text-white p-8">
          <h2 className="text-3xl font-semibold mb-4">Fresh Groceries</h2>
          <p className="text-sm text-center opacity-90">
            Get farm-fresh produce and daily essentials delivered to your doorstep.
          </p>
        </div>

        {/* Right form */}
        <div className="p-8">
          
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">
              Start shopping fresh today 🥦
            </p>
          </div>

          {/* Message */}
          {message && (
            <div className="mb-4 text-sm text-center text-red-500">
              {message}
            </div>
          )}

          <div className="space-y-4">
            
            {/* Names */}
            <div className="flex gap-3">
              <div className="w-full">
                <input
                  type="text"
                  name="firstName"
                  value={formdata.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E8EA2]"
                />
                {fieldErrors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldErrors.firstName}
                  </p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="lastName"
                  value={formdata.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E8EA2]"
                />
                {fieldErrors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldErrors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E8EA2]"
              />
              {fieldErrors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}

            <div>
              <input
              type="string"                
                name="phoneNumber"
                value={formdata.phoneNumber}           
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E8EA2]"
              />
              {fieldErrors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {fieldErrors.phoneNumber}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formdata.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E8EA2]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
              {fieldErrors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formdata.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E8EA2]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirm ? "🙈" : "👁️"}
              </button>
              {fieldErrors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {fieldErrors.confirmPassword}
                </p>
              )}
            </div>

            {/* Password strength */}
            {formdata.password && (
              <div className="flex flex-col gap-1">
                <p className="text-xs">
                  Strength:{" "}
                  <span
                    className={
                      strength === "weak"
                        ? "text-red-500"
                        : strength === "medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }
                  >
                    {strength}
                  </span>
                </p>

                <div className="w-full h-2 bg-gray-300 rounded">
                  <div
                    className={`h-2 rounded ${
                      strength === "weak"
                        ? "w-1/3 bg-red-500"
                        : strength === "medium"
                        ? "w-2/3 bg-yellow-500"
                        : "w-full bg-green-500"
                    }`}
                  />
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-medium transition shadow-sm ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#4E8EA2] hover:bg-[#3b6d7d] text-white"
              }`}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-sm text-center">
            <span className="text-gray-500">
              Already have an account?{" "}
            </span>
            <button
              onClick={switchToLogin}
              className="text-[#4E8EA2] font-medium hover:underline"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}