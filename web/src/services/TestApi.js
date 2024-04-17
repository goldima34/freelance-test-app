import $api from "../services/index";

export const getAllTests = async () => {
  const { data } = await $api.get("/test/getAll");
  return data;
};

export const getQuestionsByTestId = async (TestId) => {
  const { data } = await $api.post("/question/findQuestions", { TestId });
  return data;
};

export const getAnswerByQuestionId = async (QuestionId) => {
  const { data } = await $api.post("/answer/get", { QuestionId });
  return data;
};

export const createUserTest = async (
  UserId,
  TestId,
  Time,
  QuestionCount,
  CorrectAnswerCount
) => {
  const { data } = await $api.post("/userTest/create", {
    UserId,
    TestId,
    Time,
    QuestionCount,
    CorrectAnswerCount,
  });
  return data;
};

export const getUserTest = async () => {
  const { data } = await $api.get("/userTest/get");
  return data;
};

export const getUserTestByTestId = async (TestId) => {
  const { data } = await $api.post("/userTest/getById", { TestId });
  return data;
};

export const getTestName = async (id) => {
  const { data } = await $api.get("/test/get", { params: { id } });
  return data;
};

export const createTest = async (testTitle, questions, UserId) => {
  const test = await $api.post("/test/create", { UserId, Title: testTitle }); // робимо тест
  const TestId = test.data.id;
  const Title = test.data.Title;

  for (const element of questions) {
    let Title = element.question;
    const question = await $api.post("/question/create", { TestId, Title }); // робимо питання
    const QuestionId = question.data.id;

    const answer = await $api.post("/answer/create", {
      QuestionId,
      Title: element.answers[element.correctAnswerIndex],
      IsCorrect: true,
    }); // робимо коректні відповіді

    let answers = element.answers;
    const newAnswers = element.answers.filter(
      (answers, index) => index !== element.correctAnswerIndex
    );
    
    for (const answers of newAnswers) {
      $api.post("/answer/create", {
        QuestionId,
        Title: answers,
        IsCorrect: false,
      }); // робимо не коректні відповіді
    }
  }
};

export const findByCountTest = async () => {
  const {data} = await $api.get("/userTest/findByCountTest");
  return data;
};


export const findByRaiting = async () => {
  const { data } = await $api.get("/userTest/findByRaiting");
  return data;
};
