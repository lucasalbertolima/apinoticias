import axios from 'axios';

const getNewsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=5178a2ed45264840a0f097b8351f9f7b`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter notícias');
  }
};

export default getNewsByCategory;
