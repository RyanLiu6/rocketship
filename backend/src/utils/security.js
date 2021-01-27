// Libraries
import { readFileSync } from "fs";
import { hash, compare } from "bcryptjs";
import { constants as _constants, publicEncrypt, privateDecrypt } from "crypto";

// Custom imports
import constants from "../config/constants.js";

let encrypt = (input) => {
  var publicKey = readFileSync(constants.PUBLIC_KEY_PATH, "utf8");
  var buffer = Buffer.from(input);
  let options =
  {
    "key": publicKey,
    "padding": _constants.RSA_PKCS1_PADDING
  };
  var encrypted = publicEncrypt(options, buffer);
  return encrypted.toString("base64");
};

let decrypt = (input) => {
  var privateKey = readFileSync(constants.PRIVATE_KEY_PATH, "utf8");
  var buffer = Buffer.from(input, "base64");
  let options =
  {
    "key": privateKey,
    "padding": _constants.RSA_PKCS1_PADDING
  };
  var decrypted = privateDecrypt(options, buffer);
  return decrypted.toString("utf8");
};

let hashPassword = async (password) => {
  try {
    return await hash(password, constants.BCRYPT_ROUNDS);
  } catch (err) {
    return null;
  }
}

let verifyPassword = async (password, hashed) => {
  return await compare(password, hashed);
}

export default {
  encrypt,
  decrypt,
  hashPassword,
  verifyPassword
}
