import bcrypt, { hash } from "bcrypt";

const SALT_ROUNDS = 12;

class EncryptUtil {
  public static getHash(senha: string) {
    return bcrypt.hash(senha, SALT_ROUNDS);
  }
  public static compareHash(senha: string, hash: string) {
    return bcrypt.compare(senha, hash);
  }
}

export default EncryptUtil;
