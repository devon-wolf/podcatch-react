import { Feed } from '../types';

const USER_FEEDS = 'USER_FEEDS';

export function getLocalFeeds(): Feed[] {
  function setEmptyLocalFeeds(): Feed[] {
    localStorage.setItem(USER_FEEDS, JSON.stringify([]));
    return getLocalFeeds();
  }
  const userFeeds = localStorage.getItem(USER_FEEDS);
  if (!userFeeds) return setEmptyLocalFeeds();
  return JSON.parse(userFeeds);
}
export function addLocalFeed(newFeed: Feed): void {
  const userFeeds = getLocalFeeds();
  localStorage.setItem(USER_FEEDS, JSON.stringify([...userFeeds, newFeed]));
}
export function removeLocalFeed(targetFeedId: string): void {
  const userFeeds = getLocalFeeds();
  const updatedFeeds = userFeeds.filter(
    (feed: Feed) => feed.id !== targetFeedId
  );
  localStorage.setItem(USER_FEEDS, JSON.stringify(updatedFeeds));
}
