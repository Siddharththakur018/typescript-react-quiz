export const fetchQuestions = async () => {
    try {
        const response = await fetch('db.json');
        if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
        const data = await response.json();
        return data.questions;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};
