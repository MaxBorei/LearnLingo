function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
function validatePassword(password) {
  return password.trim().length >= 8;
}
function validateName(name) {
  const namePattern = /^[a-zA-Z\s'-]+$/;
  if (!name.trim() || !namePattern.test(name.trim())) {
    return false;
  }
  return true;
}
function validateUkrainePhone(phoneNumber) {
  const uaPhoneRegex = /^(\+38)?0\d{9}$/;
  const cleaned = phoneNumber.replace(/[\s\-\(\)]/g, '');

  return uaPhoneRegex.test(cleaned);
}

export function validateLoginForm({ email, password }) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Invalid email format';
  }

  if (!password.trim()) {
    errors.password = 'Password is required';
  }

  return errors;
}
export function validateRegisterForm({ name, email, password }) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Invalid email format';
  }

  if (!password.trim()) {
    errors.password = 'Password is required';
  } else if (!validatePassword(password)) {
    errors.password = 'Password must be at least 8 characters';
  }
  if (!name) {
    errors.name = 'Name is required';
  } else if (!validateName(name)) {
    errors.name = 'Invalid name';
  }
  return errors;
}
// validateTrialForm;
