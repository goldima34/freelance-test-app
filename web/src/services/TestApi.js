import $api from "../services/index";

export const getAllTests = async () => {
  const { data } = await $api.get("/test/getAll");
  return data;
};

export const getQuestionsByTestId = async TestId => {
  const { data } = await $api.post("/question/findQuestions", {TestId});
  return data;
};

export const getAnswerByQuestionId = async QuestionId => {
  const { data } = await $api.post("/answer/get", {QuestionId});
  return data;
};

export const createUserTest = async ( UserId, TestId, Time, QuestionCount, CorrectAnswerCount) => {
  const { data } = await $api.post("/userTest/create", {UserId, TestId, Time, QuestionCount, CorrectAnswerCount});
  return data;
}

export const getUserTest = async () => {
  const { data } = await $api.get("/userTest/get");
  return data;
}

export const getTestName = async (id) => {
  const { data } = await $api.get("/test/get", { params: { id } });
  return data;
}

export const createTest = async (questions, UserId) => {
  questions.map((element) => {
    let Title = element.question
    $api.post("/test/create", { UserId, Title}
  )})
  // const { data } = await $api.post("/test/create", { UserId, });
  // return data;
}