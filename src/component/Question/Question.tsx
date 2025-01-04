import React, { FC } from 'react';

interface QuestionType {
  id: number;
  question: string;
}
interface QuestionProps {
  data: QuestionType[];
  questionIndex: number;
}

const Question: FC<QuestionProps> = ({ data, questionIndex }) => {
  const currentQuestion = data[questionIndex];

  if (!currentQuestion) return null;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg mb-6 shadow-md">
      <p className="text-lg font-medium">{currentQuestion.question}</p>
    </div>
  );
};

export default Question;
