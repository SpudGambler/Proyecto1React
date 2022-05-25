/*Minimo de caracteres permitidos en el campo de contraseña,nombreyapellido*/
export function minLengthValidation(inputData, minLength) {
  const { value } = inputData;
  removeClassErrorSuccess(inputData);
  if (value.length >= minLength) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function emailValidation(inputData) {
  // eslint-disable-next-Line no-useless-escape
  const emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  const { value } = inputData;
  removeClassErrorSuccess(inputData);
  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

function removeClassErrorSuccess(inputData) {
  inputData.classList.remove("success");
  inputData.classList.remove("error");
}
