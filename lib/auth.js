//Holds authentication-related methods
import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
  //2nd argument is number of salting(?) rounds,
  // the more there are, the more secure
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
