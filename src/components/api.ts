import { Article } from '../types/Article';
import { getArticle } from '../utils/fetch';

export const getAllArticles = () => getArticle<Article[]>('/articles');
