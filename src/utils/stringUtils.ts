export function makeUrlPath(feedTitle: string): string {
  return feedTitle.split(' ').join('-');
}

export function splitUrlPath(urlPath: string): string {
  return urlPath.split('-').join(' ');
}
