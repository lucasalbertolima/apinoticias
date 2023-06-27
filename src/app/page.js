"use client";
import React, { useState } from 'react';
import NewsComponent from '../components/news';

export default function Home() {
  const [category, setCategory] = useState('business');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Últimas notícias do Brasil</h1>
        <div className="mb-8">
          <label htmlFor="category-select" className="mr-4">Selecione a categoria:</label>
          <select
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            className="px-4 py-2 rounded border"
          >
            <option value="business">Negócios</option>
            <option value="entertainment">Entretenimento</option>
            <option value="health">Saúde</option>
            <option value="science">Ciência</option>
            <option value="sports">Esportes</option>
            <option value="technology">Tecnologia</option>
          </select>
        </div>
        <NewsComponent category={category} />
      </div>
    </main>
  );
}
