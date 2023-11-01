export const checkValidData = (email, password, name, signInForm) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );

  // Minimum 8 characters {>>8,20}
  // Maximum 20 characters {8,>>20}
  // At least one uppercase character (?=.*[A-Z])
  // At least one lowercase character (?=.*[a-z])
  // At least one digit (?=.*\d)
  const isPasswordValid =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
      password
    );

  // Allow only letters with numbers
  const isUserNameValid = /^[a-zA-Z0-9]+$/.test(name);

  if (!signInForm && !isUserNameValid) return "User name is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
