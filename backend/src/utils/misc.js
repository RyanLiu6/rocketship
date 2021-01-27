// This should work both there and elsewhere.
let isEmptyObject = (obj) => {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};

let noProperty = (object, property) => {
  return !object.hasOwnProperty(property);
}

let isValidObjectId = (idString) => {
  var matches = idString.match(/^[0-9a-fA-F]$/);
  return matches == null;
};

let validEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true;
  }
    return false;
}

let validObject = (object, properties) => {
  if (isEmptyObject(object)) {
    return false;
  }

  for (let index in properties) {
    let property = properties[index];
    if (noProperty(object, property)) {
      return false;
    }
  }

  return true;
}

export default {
  isEmptyObject,
  noProperty,
  isValidObjectId,
  validEmail,
  validObject
}
