import Joi from 'joi';

export const advertValidation = (state) => {
  const schema = Joi.object().keys({
    title: Joi.string().regex(/^([a-zA-Z0-9-.\s]{10,50})+$/).required()
      .error(new Error('Title should contain 10-50 symbols.')),
    description: Joi.string().regex(/^[a-zA-Z0-9-.\s]+$/).required()
      .error(new Error('The description may contain letters, numbers or symbols "." , "-".')),
    category: Joi.string().required()
      .error(new Error('Choose category.')),
    price: Joi.string().regex(/^\d*\.?\d+$/).required()
      .error(new Error('The price can only be a positive numeric value.')),
  });

  const result = Joi.validate(state, schema);
  if (result.error === null) {
    return 'good';
  }
  return result.error.message;
};

export const signUpValidation = (state) => {
  const schema = Joi.object().keys({
    username: Joi.string().regex(/^([a-zA-Z0-9.-]{4,20})+$/).required()
      .error(new Error('Username should contain 4-20 letters, numbers or symbols "." , "-".')),
    email: Joi.string().email().required()
      .error(new Error('Email must contain at least 6 symbols.')),
    password: Joi.string().min(6).required()
      .error(new Error('Password must contain at least 6 symbols.')),
    firstName: Joi.string().regex(/^([a-zA-Z-\s]{2,20})+$/).required()
      .error(new Error('First name should contain 2-20 letters. Space and symbol "." are allowed.')),
    lastName: Joi.string().regex(/[a-zA-Z]{2,20}/).required()
      .error(new Error('Last name should contain 2-20 letters.')),
    phone: Joi.string().regex(/^((\+375)+(29|33)+([0-9]){7})+$/).required()
      .error(new Error('The phone must be in the format +375 29|33 xxx xx xx.')),
  });

  const result = Joi.validate(state, schema);
  if (result.error === null) {
    return 'good';
  }
  return result.error.message;
};

export const updateUserValidation = (state) => {
  const schema = Joi.object().keys({
    username: Joi.string().regex(/^([a-zA-Z0-9.-]{4,20})+$/).required()
      .error(new Error('Username should contain 4-20 letters, numbers or symbols "." , "-".')),
    firstName: Joi.string().regex(/^([a-zA-Z-\s]{2,20})+$/).required()
      .error(new Error('First name should contain 2-20 letters. Space and symbol "." are allowed.')),
    lastName: Joi.string().regex(/[a-zA-Z]{2,20}/).required()
      .error(new Error('Last name should contain 2-20 letters.')),
    phone: Joi.string().regex(/^((\+375)+(29|33)+([0-9]){7})+$/).required()
      .error(new Error('The phone must be in the format +375 29|33 xxx xx xx.')),
    oldUsername: Joi.any().optional(),
    oldPhone: Joi.any().optional(),
  });

  const result = Joi.validate(state, schema);
  if (result.error === null) {
    return 'good';
  }
  return result.error.message;
};

export const changeUserEmailValidation = (state) => {
  const schema = Joi.object().keys({
    curPassUserEmail: Joi.string().required()
      .error(new Error('Password must contain at least 6 symbols.')),
    email: Joi.string().email().min(3).max(30)
      .required()
      .error(new Error('Email must contain at least 6 symbols.')),
  });

  const result = Joi.validate(state, schema);
  if (result.error === null) {
    return 'good';
  }
  return result.error.message;
};

export const changePasswordValidation = (state) => {
  const schema = Joi.object().keys({
    curPassUserPass: Joi.string().min(6).required()
      .error(new Error('Password must contain at least 6 symbols.')),
    newPassword: Joi.string().min(6).required()
      .error(new Error('Password must contain at least 6 symbols.')),
  });

  const result = Joi.validate(state, schema);
  if (result.error === null) {
    return 'good';
  }
  return result.error.message;
};
