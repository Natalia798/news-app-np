export function newsCategoryAdapter(backendResponse) {
  if (!backendResponse) {
    return [];
  } else {
    console.log(backendResponse);
    const news = backendResponse.response.results;
    const adaptedNews = news.map((oneNews) => {
      return {
        image: oneNews.fields.thumbnail,
        title: oneNews.webTitle,
        description: oneNews.fields.trailText,
        id: oneNews.id,
      };
    });
    return adaptedNews;
  }
}
