// Example simple email validation function
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Jest test case
test('Email validation works correctly', () => {
  const email = 'invalidEmail';
  expect(validateEmail(email)).toBe(false);
});
