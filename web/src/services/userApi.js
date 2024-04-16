import $api from "../services/index";

export const registration = async (name, email, password, role) => {
  const { data } = await $api.post("/user/register", {
    name,
    email,
    password,
    role
  });
  return data;
};

export const getOneUser = async (id) => {
  const { data } = await $api.get("/user/get", { params: {id}});
  return data;
};


export const login = async (email, password) => {
  const { data } = await $api.post("/user/login", { email, password });
  return data;
};

export const changeName = async (id, newName) => {
  const { data } = await $api.post("/user/changeName", { id, newName });
  return data;
};

export const changeEmail = async (id, newEmail) => {
  const { data } = await $api.post("/user/changeEmail", { id, newEmail });
  return data;
};

export const changePassword = async (id, newPassword) => {
  const { data } = await $api.post("/user/changePassword", { id, newPassword });
  return data;
};

export const logout = () =>{
  localStorage.clear()
}
