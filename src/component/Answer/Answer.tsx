import React from 'react';

interface QuestionType {
  options: string[];
  answer: number;
}

interface AnswerProps {
  data: QuestionType[];
  questionIndex: number;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  multipleAnswer: number | null;
  setMultipleAnswer: React.Dispatch<React.SetStateAction<number | null>>;
  correctAnswer: number;
  setCorrectAnswer: React.Dispatch<React.SetStateAction<number>>;
}

const Answer: React.FC<AnswerProps> = ({
  data,
  questionIndex,
  setQuestionIndex,
  multipleAnswer,
  setMultipleAnswer,
  correctAnswer,
  setCorrectAnswer,
}) => {
  const currentAnswer = data[questionIndex];
  const isCorrectAnswer = multipleAnswer === currentAnswer.answer - 1;

  const handleNext = () => {
    if (multipleAnswer !== null) {
      if (isCorrectAnswer) setCorrectAnswer((prev) => prev + 1);
      setQuestionIndex((prev) => prev + 1);
      setMultipleAnswer(null);
    }
  };

  return (
    <div>
      <ul className="space-y-4">
        {currentAnswer.options.map((option, index) => (
          <li
            key={index}
            onClick={() => setMultipleAnswer(index)}
            className={`cursor-pointer p-3 rounded-lg text-center shadow-md 
              transition-all duration-300 
              ${
                multipleAnswer === index
                  ? isCorrectAnswer
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gray-100 hover:bg-blue-100'
              }`}
          >
            {option}
          </li>
        ))}
      </ul>

      {multipleAnswer !== null && (
        <p
          className={`mt-4 text-lg font-semibold ${
            isCorrectAnswer ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isCorrectAnswer ? 'Correct!' : 'Incorrect!'}
        </p>
      )}

      <button
        onClick={handleNext}
        disabled={multipleAnswer === null}
        className={`mt-6 w-full py-2 px-4 rounded-lg font-medium shadow-md transition-all 
          ${
            multipleAnswer !== null
              ? 'bg-gradient-to-r from-green-400 to-green-600 text-white hover:opacity-90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Answer;
