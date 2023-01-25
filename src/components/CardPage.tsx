import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Article } from '../types/Article';

type Props = {
  articles: Article[]
};

export const CardPage: React.FC<Props> = ({ articles }) => {
  const { id } = useParams();

  const foundArticle = articles.find(
    article => article.id === Number(id),
  );

  return (
    <>
      <section className="article">
        <img
          src={foundArticle?.imageUrl}
          alt="header"
          className="article__image"
        />
        <div className="article__box">
          <h2 className="article__title">{foundArticle?.title}</h2>
          <article className="article__description">
            {foundArticle?.summary}
          </article>
        </div>
        <div className="article__return">
          <ArrowBackIcon />
          <Link to="/" className="article__go-back">
            Back to homepage
          </Link>
        </div>
      </section>
    </>
  );
};
