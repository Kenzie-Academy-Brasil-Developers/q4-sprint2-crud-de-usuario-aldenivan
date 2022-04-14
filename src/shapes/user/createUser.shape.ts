import * as yup from "yup";

const createUserShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.bool().required(),
  createadOn: yup.string(),
  updateadOn: yup.string(),
});

export default createUserShape;
