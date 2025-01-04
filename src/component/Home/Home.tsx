import React, {  FC,useState } from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

interface HomeProps {
  data: QuestionType[];
  setData: React.Dispatch<React.SetStateAction<QuestionType[]>>;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const [multipleAnswer, setMultipleAnswer] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        {questionIndex < data.length ? (
          <>
            <Question data={data} questionIndex={questionIndex} />
            <Answer
              data={data}
              questionIndex={questionIndex}
              setMultipleAnswer={setMultipleAnswer}
              multipleAnswer={multipleAnswer}
              setQuestionIndex={setQuestionIndex}
              correctAnswer={correctAnswer}
              setCorrectAnswer={setCorrectAnswer}
            />
          </>
        ) : (
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">
              Quiz Completed!
            </p>
            <p className="text-lg mt-4">
              Your Score: 
              <span className="text-green-600 font-semibold">
                {correctAnswer}/{data.length}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
