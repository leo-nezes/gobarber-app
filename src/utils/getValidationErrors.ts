import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
  // Este uso de chave/valor, significa que a chave será qualquer coisa desde que seja do tipo string. O key pode ser substituido por qualquer valor. Isso evita que sejam criadas várias propriedades (Ex: name: string; email: string, password: string, etc.) que retornem o mesmo tipo de dado.
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
