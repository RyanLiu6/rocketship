// Custom imports
import { ERR, FAILURE, SUCCESS } from "../config/constants.js";

let callback = (res, err, output) => {
  if (err) {
    res.send(ERR);
  } else {
    let result = checkResult(output);
    res.send(result);
  }
};

let regCallback = (res, err, output) => {
  if (err) {
    console.log(err);
    res.send(ERR);
  } else {
    let result = checkResult(output);
    if (result == FAILURE) {
      res.send(result);
    } else {
      res.send(SUCCESS);
    }
  }
}

let putCallback = (res, err, output) => {
  if (err) {
    res.send(ERR);
  }
  else {
    let result = checkResult(output);
    res.send(result);
  }
};

let getArrCallback = (res, err, output) => {
  if (err) {
    res.send(ERR);
  }
  else {
    let result = checkResult(output);
    res.send(result);
  }
};

let getObjCallback = (res, err, output) => {
  if (err) {
    res.send(ERR);
  }
  else {
    let result = checkResult(output[0]);
    res.send(result);
  }
};

let checkResult = (result) => {
  if (result) {
    return result;
  } else {
    return FAILURE;
  }
}

export default {
  callback,
  regCallback,
  putCallback,
  getArrCallback,
  getObjCallback
}
