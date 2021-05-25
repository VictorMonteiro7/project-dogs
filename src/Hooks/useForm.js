import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email com formato inválido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha deve conter no mínimo 1 caracter maiúsculo, 1 minúsculo, 1 número e um caracter especial. O tamanho deve ser no mínimo 8 caracteres',
  },
  number: {
    regex: /^\d+$/,
    message: 'Por favor, insira somente números',
  },
};

const useForm = (type) => {
  const [initialValue, setInitialValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setInitialValue(target.value);
  }

  return {
    initialValue,
    setInitialValue,
    onChange,
    validate: () => validate(initialValue),
    onBlur: () => validate(initialValue),
    error,
  };
};

export default useForm;
