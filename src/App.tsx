import { FC, useEffect, useState } from 'react';
import './App.css'
import Home from './component/Home/Home'
import { fetchQuestions } from './services/apiService';

interface QuestionType {
  id: number;
  question: string;
  options: string[];
  correct_answer: string;
}

const App: FC = () => {
  const [data, setData] = useState<QuestionType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchApi = async () => {
    try {
      const result = await fetchQuestions();
      setData(result);
      setError(null);
    } catch (error) {
      console.error("Error occurred", error);
      setError("Failed to fetch quiz questions. Please try again later.");
    }
  };
  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <Home data={data} setData={setData} />
    </>
  )
}

export default App
