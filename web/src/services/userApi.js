import $api from "../services/index";

export const registration = async (name, email, password, role) => {
  const { data } = await $api.post("api/user/register", {
    name,
    email,
    password,
    role
  });
  return data;
};

export const login = async (email, password) => {
  const { data } = await $api.post("api/user/login", { email, password });
  return data;
};
