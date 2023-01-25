/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Article } from '../types/Article';

type Props = {
  query: string,
  article: Article,
};

export const Card: React.FC<Props> = ({ query, article }) => {
  const {
    id,
    title,
    imageUrl,
    publishedAt,
    summary,
  } = article;

  const getPartOfDescription = (text: string) => {
    const arrOfText = text.split(' ');
    let shortDescription = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const word of arrOfText) {
      if ((shortDescription + word).length > 100) {
        break;
      }

      shortDescription += `${word} `;
    }

    return `${shortDescription.trim()}...`;
  };

  const visibleDescription = getPartOfDescription(summary);

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  const date = `${month[Number(publishedAt.slice(5, 7)) - 1]} ${publishedAt.slice(8, 10)}th, ${publishedAt.slice(0, 4)}`;

  return (
    <Container
      className="card"
      sx={{
        width: '400px',
        padding: '0',
        pl: '0',
        pr: '1px',
        background: '#FFFFFF',
        border: '1px solid #EAEAEA',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '217px',
          overflow: 'hidden',
          borderRadius: '5px',
        }}
      >
        <img
          src={imageUrl}
          alt=""
          className="card__photo"
        />
      </Box>
      <div className="card__info-container">
        <div className="card__date">
          <CalendarTodayIcon />
          <p className="card__date__text">{date}</p>
        </div>
        <h4 className="card__title">
          <Highlighter
            highlightClassName="active-query"
            searchWords={query.split(' ')}
            textToHighlight={title}
          />
        </h4>
        <article className="card__description">
          <Highlighter
            highlightClassName="active-query"
            searchWords={query.split(' ')}
            textToHighlight={visibleDescription}
          />
        </article>
        <Link
          className="card__link-container"
          to={`/card/${id}`}
        >
          <p className="card__link">
            Read more
          </p>
          <ArrowRightAltIcon color="action" />
        </Link>
      </div>
    </Container>
  );
};
