/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { Article } from '../types/Article';
import { ArticlesList } from './ArticlesList';
import { Loader } from './Loader';

type Props = {
  articles: Article[]
};

export const HomePage: React.FC<Props> = ({ articles }) => {
  const [query, setQuery] = useState('');

  const getVisibleArticles = (queryToFilter: string) => {
    const arrOfQuery = queryToFilter.split(' ');
    const visibleArticles: Article[] = [];

    for (const article of articles) {
      for (const word of arrOfQuery) {
        if (article.title.split(' ')
          .some((title) => title.toLocaleLowerCase()
            .includes(word.toLocaleLowerCase()))
          && !visibleArticles.find(
            articleToCheck => articleToCheck.id === article.id,
          )) {
          visibleArticles.unshift(article);
        }

        if (article.summary.split(' ')
          .some((summary) => summary.toLocaleLowerCase()
            .includes(word.toLocaleLowerCase()))
          && !visibleArticles.find(
            articleToCheck => articleToCheck.id === article.id,
          )) {
          visibleArticles.push(article);
        }
      }
    }

    return visibleArticles;
  };

  const visibleArticles = query.length > 0
    ? getVisibleArticles(query)
    : articles;

  return (
    <div className="home-page">
      <Box sx={{ width: '600px' }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            mt: '20px',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#363636',
            mb: '10px',
          }}
        >
          Filter by keywords
        </Typography>
        <FormControl sx={{ width: '600px', height: '50px' }}>
          <TextField
            InputProps={{
              startAdornment: (
                <SearchIcon
                  color="action"
                  sx={{ mr: '10px' }}
                />
              ),
            }}
            placeholder="Please enter text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </FormControl>
      </Box>
      {articles.length > 0
        ? (
          <ArticlesList visibleArticles={visibleArticles} query={query} />
        )
        : (
          <Loader />
        )}
    </div>
  );
};
