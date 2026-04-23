export const formatPhone = (phone: string): { valid: boolean; value?: string; error?: string } => {
    const trimmed = phone.trim()
  
    // Reject +254
    if (trimmed.startsWith("+254")) {
      return { valid: false, error: "Use 07 or 01 format, not +254" }
    }
  
    // Must be digits only
    if (!/^\d+$/.test(trimmed)) {
      return { valid: false, error: "Phone must contain only numbers" }
    }
  
    // Must be exactly 10 digits
    if (trimmed.length !== 10) {
      return { valid: false, error: "Phone must be 10 digits" }
    }
  
    // Must start with 07 or 01
    if (!trimmed.startsWith("07") && !trimmed.startsWith("01")) {
      return { valid: false, error: "Phone must start with 07 or 01" }
    }
  
    // Convert to 254 format
    const formatted = "254" + trimmed.slice(1)
  
    return { valid: true, value: formatted }
  }

  export const namesChecker = (
    name: string
  ): { valid: boolean; value?: string; error?: string } => {
    const trimmed = name.trim()
  
    if (!trimmed) {
      return { valid: false, error: "Name is required" }
    }
  
    // Only letters and spaces
    if (!/^[A-Za-z\s]+$/.test(trimmed)) {
      return { valid: false, error: "Name must contain only letters" }
    }
  
    // Optional: normalize (capitalize each word)
    const formatted = trimmed
      .toLowerCase()
      .split(" ")
      .filter(Boolean)
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ")
  
    return { valid: true, value: formatted }
  }

  export const emailChecker = (
    email: string
  ): { valid: boolean; value?: string; error?: string } => {
    const trimmed = email.trim()
  
    if (!trimmed) {
      return { valid: false, error: "Email is required" }
    }
  
    // Standard email regex (practical, not overkill)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
    if (!emailRegex.test(trimmed)) {
      return { valid: false, error: "Invalid email address" }
    }
  
    return {
      valid: true,
      value: trimmed.toLowerCase()
    }
  }

  export const passwordChecker = (
    password: string
  ): { valid: boolean; value?: string; error?: string } => {
  
    const trimmed = password.trim()
  
    if (!trimmed) {
      return { valid: false, error: "Password is required" }
    }
  
    if (trimmed.length < 6) {
      return { valid: false, error: "Password must be at least 6 characters" }
    }
  
    // At least one uppercase letter
    if (!/[A-Z]/.test(trimmed)) {
      return { valid: false, error: "Must include at least one uppercase letter" }
    }
  
    // At least one number
    if (!/[0-9]/.test(trimmed)) {
      return { valid: false, error: "Must include at least one number" }
    }
  
    // At least one special character
    if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\]]/.test(trimmed)) {
      return { valid: false, error: "Must include at least one special character" }
    }
  
    return {
      valid: true,
      value: trimmed
    }
  }

   export const confirmPasswordChecker = (
    password: string,
    confirmPassword: string
  ): { valid: boolean; error?: string } => {
  
    if (!confirmPassword.trim()) {
      return { valid: false, error: "Please confirm your password" }
    }
  
    if (password !== confirmPassword) {
      return { valid: false, error: "Passwords do not match" }
    }
  
    return { valid: true }
  }

  

type Strength = "weak" | "medium" | "strong"

export const getPasswordStrength = (password: string): Strength => {
  let score = 0

  if (password.length >= 6) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[!@#$%^&*]/.test(password)) score++

  if (score <= 2) return "weak"
  if (score === 3) return "medium"
  return "strong"
}