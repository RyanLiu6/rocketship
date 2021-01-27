// Libraries
import { readFileSync } from "fs";
import { sign as _sign, decode as _decode, verify as _verify } from "jsonwebtoken";

// Custom imports
import Misc from "./misc.js";
import constants from "../config/constants.js";

const prvKey = readFileSync(constants.PRIVATE_KEY_PATH, "utf8");
const pubKey = readFileSync(constants.PUBLIC_KEY_PATH, "utf8");

let sign = (payload) => {
  let target = constants.AUDIENCE + "/" + payload.access;

  let options = {
    issuer: constants.ISSUER,
    subject: payload.email,
    audience: target,
    expiresIn: "30d", // token is valid for 30 days
    algorithm: "RS256"
  };

  return _sign(payload, prvKey, options);
};

let decode = (token) => {
  return _decode(token, {complete: true});
};

let verify = (token, requiredAccess, storeOrUser = false) => {
  let options = {
    issuer: constants.ISSUER,
    algorithm: "RS256"
  }

  let accessLevel = getAccess(requiredAccess);

  try {
    let verifyStatus = _verify(token, pubKey, options);

    if (!Misc.isEmptyObject(verifyStatus)) {
      let currAccess = getAccess(verifyStatus.access);
      if (currAccess == accessLevel) {
        if (storeOrUser) {
          return true;
        } else {
          return verifyStatus.access == requiredAccess;
        }
      } else {
        return currAccess > accessLevel;
      }
    } else {
      console.log("Bad Bearer");
      return false;
    }
  } catch (err) {
    console.log("Bad Bearer");
    return false
  }
};

let getAccess = (type) => {
  return constants.JWT_ACCESS[type];
};

export default {
  sign,
  verify,
  decode
}
