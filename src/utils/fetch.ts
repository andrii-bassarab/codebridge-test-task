const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

export function getArticle<T>(
  url: string,
): Promise<T> {
  return fetch(BASE_URL + url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .then(result => result);
}
