const errorCodes = require('./error-codes');

function apiErrorResponse(httpStatus, details = null) {
  const errorObject = errorCodes[httpStatus];

  if (!errorObject) {
    throw new Error(`Código de erro desconhecido: ${httpStatus}`);
  }

  const { code, message } = errorObject;
  const errorResponse = { error: true, httpStatus, code, message  };

  if (details !== null) {
    errorResponse.details = details;
  }

  return errorResponse;
}

module.exports = apiErrorResponse;
