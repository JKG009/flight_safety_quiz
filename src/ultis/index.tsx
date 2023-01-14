import {
  a350Questions,
  b777Questions,
  dangerousGoodsQuestions,
  firstAidQuestions,
  generalProcedureQuestions,
  questionDetails,
} from "../data";
import { NUMBER_OF_QUESTIONS, NUMBER_OF_DG_QUESTIONS } from "../config";

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
        ...[questionDetails[combinedQuestionsArr[i].title]],
      },
    };
  }

  return object;
};

// for (let i = 0; i < combinedQuestionsArr.length; i++) {
//   for (const [key, value] of Object.entries(
//     questionDetails[combinedQuestionsArr[i].title]
//   )) {
//     console.log("KEY:", key, "VALUE:", value);
//     console.log([questionDetails[combinedQuestionsArr[i].title]]);
//     object = {
//       ...object,
//       [combinedQuestionsArr[i].title]: {
//         ...[questionDetails[combinedQuestionsArr[i].title]],
//         [key]: value,
//       },
//     };
//   }
// }