// TODO consider if original string already has hyphens in it?? this will not put it back together correctly

export function makeUrlPath(title: string): string {
  return title.trim().split(' ').join('-');
}

export function splitUrlPath(urlPath: string): string {
  return urlPath.split('-').join(' ');
}
