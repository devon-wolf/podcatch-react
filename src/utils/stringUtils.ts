export const makeUrlPath = (feedTitle: string): string => {
  return feedTitle.split(' ').join('-');
};

export const splitUrlPath = (urlPath: string): string => {
  return urlPath.split('-').join(' ');
};
