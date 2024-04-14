import $api from "../services/index";

export const registration = async (name, email, password, role) => {
  const { data } = await $api.post("/user/register", {
    name,
    email,
    password,
    role
  });
  console.log(data)
  return data;
};

export const login = async (email, password) => {
  const { data } = await $api.post("/user/login", { email, password });
  return data;
};
