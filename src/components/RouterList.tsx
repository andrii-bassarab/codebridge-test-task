import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Article } from '../types/Article';
import { getAllArticles } from './api';
import { CardPage } from './CardPage';
import { HomePage } from './HomePage';

export const RouterList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticlesFromServer = async () => {
    try {
      // setLoader(true);
      const articlesFromServer = await getAllArticles();

      setArticles(articlesFromServer);
    } catch {
      throw new Error();
    } finally {
      // setLoader(false);
    }
  };

  useEffect(() => {
    getArticlesFromServer();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage articles={articles} />}
      />
      <Route
        path="home"
        element={<Navigate to="/" replace />}
      />
      <Route
        path="card/:id"
        element={<CardPage articles={articles} />}
      />
    </Routes>
  );
};
