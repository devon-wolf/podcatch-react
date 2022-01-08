import {
  getLocalFeeds,
  addLocalFeed,
  removeLocalFeed,
} from './localStorageUtils';
import { Feed } from '../types';

describe('local storage utils', () => {
  const mockFeeds: Feed[] = [
    {
      id: '1',
      url: 'fakeurl1',
      title: 'title 1',
      dateAdded: Date.now(),
      dateUpdated: Date.now(),
    },
    {
      id: '2',
      url: 'fakeurl2',
      title: 'title 2',
      dateAdded: Date.now(),
      dateUpdated: Date.now(),
    },
  ];

  it('gets an empty list if no user feeds have been set', () => {
    const expected = [] as Feed[];
    const actual = getLocalFeeds();
    expect(actual).toEqual(expected);
  });
  it('adds a new feed to the local list', () => {
    const expected = [mockFeeds[0]];
    addLocalFeed(mockFeeds[0]);
    const actual = getLocalFeeds();
    expect(actual).toEqual(expected);
  });
  it('removes a feed from the local list', () => {
    const expected = [] as Feed[];
    removeLocalFeed('1');
    const actual = getLocalFeeds();
    expect(actual).toEqual(expected);
  });
  it('is a flow of adding and removing items', () => {
    const expected = [mockFeeds[1]];
    addLocalFeed(mockFeeds[0]);
    addLocalFeed(mockFeeds[1]);
    const checkpoint1 = getLocalFeeds();
    expect(checkpoint1).toEqual(mockFeeds);
    removeLocalFeed('1');
    const actual = getLocalFeeds();
    expect(actual).toEqual(expected);
  });
});
