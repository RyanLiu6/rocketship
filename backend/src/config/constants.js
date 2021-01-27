export default Object.freeze({
  // Permission keys
  PRIVATE_KEY_PATH: "./src/config/keys/private_key.pem",
  PUBLIC_KEY_PATH: "./src/config/keys/public_key.pem",

  // Hashing constants
  BCRYPT_ROUNDS: 10,

  // JWT constants
  BEARER: "Bearer",
  ISSUER: "example.website",
  JWT_USER: "user",
  AUDIENCE: "api.example.website",

  // Message constants
  ERR:
  {
    "Error" : "An error has occured"
  },
  AUTH_ERROR_NO_EMAIL:
  {
    "Error" : "Must provide email when logging in or signing up"
  },
  AUTH_ERROR_NO_PASSWORD:
  {
    "Error" : "Must provide password when logging in or signing up"
  },
  AUTH_ERROR_INVALID:
  {
    "Error" : "Email or password provided is invalid"
  },
  ARGS_ERROR:
  {
    "Error" : "Check your arguments"
  },
  ID_ERROR:
  {
    "Error" : "Input ID is not a valid ObjectID"
  },
  NOT_FOUND_ERROR:
  {
    "Error" : "Given ID does not exist in the database"
  },
  DUPLICATE_ERROR:
  {
    "Error" : "Performed duplicate action"
  },
  SUCCESS:
  {
    "status" : "Success"
  },
  FAILURE:
  {
    "status": "Failure."
  }
});
