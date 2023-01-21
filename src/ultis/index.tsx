import {
  a350Questions,
  b777Questions,
  dangerousGoodsQuestions,
  firstAidQuestions,
  generalProcedureQuestions,
} from "../data";
import { NUMBER_OF_QUESTIONS, NUMBER_OF_DG_QUESTIONS } from "../config";
import { Answer } from "../types";

export const getQuestions = () => {
  const questionsArray = [
    ...generalProcedureQuestions,
    ...firstAidQuestions,
    ...a350Questions,
    ...b777Questions,
  ];
  let questions = [];

  while (questions.length < NUMBER_OF_QUESTIONS) {
    let randomIndex = Math.floor(Math.random() * questionsArray.length);
    if (questions.indexOf(questionsArray[randomIndex]) === -1) {
      questions.push(questionsArray[randomIndex]);
    }
  }

  return questions;
};

export const getDGQuestions = () => {
  let questions = [];

  while (questions.length < NUMBER_OF_DG_QUESTIONS) {
    let randomIndex = Math.floor(
      Math.random() * dangerousGoodsQuestions.length
    );
    if (questions.indexOf(dangerousGoodsQuestions[randomIndex]) === -1) {
      questions.push(dangerousGoodsQuestions[randomIndex]);
    }
  }

  return questions;
};

export const getCombinedQuestionsDetails = (
  // TODO change any
  combinedQuestionsArr: any,
  questionDetails: any
) => {
  let object = {};
  for (let i = 0; i < combinedQuestionsArr.length; i++) {
    object = {
      ...object,
      [combinedQuestionsArr[i].title]: {
        ...questionDetails[combinedQuestionsArr[i].title],
      },
    };
  }
  return object;
};

export const shuffleAnswers = (arr: Answer[]) => {
  return arr.sort(() => 0.5 - Math.random());
};

export const formatTime = (time: number) => {
  let minutes: string | number = Math.floor(time / 60);
  let seconds: string | number = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes} : ${seconds}`;
};
