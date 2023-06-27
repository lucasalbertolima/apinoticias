import React, { useEffect, useState } from 'react';
import getNewsByCategory from '../services/getNewsByCategory';

const NewsComponent = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsByCategory(category);
        setNews(response.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [category]);

  const splitTitleAndSource = (title) => {
    const [newsTitle, source] = title.split(" - ");
    return { newsTitle, source };
  };

  return (
    <div className="max-w-2xl mx-auto">
      <ul className="space-y-4">
        {news.map((article) => {
          const { newsTitle, source } = splitTitleAndSource(article.title);

          return (
            <li key={article.title} className="border rounded p-4">
              <h1 className="text-xl font-bold mb-2">{newsTitle}</h1>
              <p className="text-gray-500 mb-4">Fonte: {source}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver notícia completa
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsComponent;
