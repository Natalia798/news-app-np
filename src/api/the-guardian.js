const API_KEY = '2709100c-9d15-4a27-ac6c-761fa14f3cb4';

export function getCategoryNewsEndpoint(
  category = 'football',
  pageSize = 6,
  pageNumber = 1
) {
  const baseUrl = 'https://content.guardianapis.com/search';
  const queryParams = `?api-key=${API_KEY}&q=${category}&page-size=${pageSize}&page=${pageNumber}&show-fields=all`;
  return baseUrl + queryParams;
}
