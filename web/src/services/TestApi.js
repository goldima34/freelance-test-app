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
