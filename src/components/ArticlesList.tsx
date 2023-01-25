import { Box, Grid } from '@mui/material';
import React from 'react';
import { Article } from '../types/Article';
import { Card } from './Card';

type Props = {
  visibleArticles: Article[],
  query: string,
};

export const ArticlesList: React.FC<Props> = ({ visibleArticles, query }) => (
  <Box sx={{ mt: '40px', mb: '50px' }}>
    <Box
      sx={{
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#363636',
      }}
    >
      {`Results: ${visibleArticles.length}`}
    </Box>
    <Box
      sx={{
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#363636',
        margin: '5px 0 45px',
        height: '1px',
        backgroundColor: '#EAEAEA',
        borderRadius: '3px',
      }}
    />
    <Grid
      container
      gap="45px"
      justifyContent="flex-start"
      sx={{ gridTemplateColumns: 'repeat(auto-fill, 400px)' }}
    >
      {visibleArticles.map(article => (
        <Card
          key={article.id}
          query={query}
          article={article}
        />
      ))}
    </Grid>
  </Box>
);
