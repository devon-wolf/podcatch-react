import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import FeedListItem from '../../components/feed-list/FeedListItem';
import { Feed } from '../../types';
import { addLocalFeed, getLocalFeeds } from '../../utils/localStorageUtils';
import { makeUrlPath } from '../../utils/stringUtils';

const FeedListPage = (): JSX.Element => {
  const [feeds, setFeeds] = useState<Feed[]>(getLocalFeeds());
  const [newFeedUrl, setNewFeedUrl] = useState<string>('');

  const handleFeedInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewFeedUrl(e.target.value);
  };

  const handleNewFeedSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const randomNumber = (Math.random() * 1000).toString();
    // TODO visit the URL and get the title data from the XML
    // const title = getTitleFromXml(newFeedUrl);
    const newFeed = {
      // id: `${title}-${randomNumber}`
      id: randomNumber,
      url: newFeedUrl,
      // title,
      title: `test-feed-${randomNumber}`,
      dateAdded: Date.now(),
    };
    addLocalFeed(newFeed);
    setFeeds(getLocalFeeds());
    setNewFeedUrl('');
  };

  return (
    <main>
      <form onSubmit={handleNewFeedSubmit} aria-label="new feed form">
        <input
          type="url"
          placeholder="enter podcast feed url here"
          value={newFeedUrl}
          onChange={handleFeedInputChange}
          aria-label="new feed input"
        />
        <button aria-label="new feed submit">add feed</button>
      </form>
      {feeds.length > 0 ? (
        <ul aria-label="added feeds">
          {feeds?.map((feed) => (
            <FeedListItem key={feed.id} title={feed.title} />
          ))}
        </ul>
      ) : (
        <p>nothing in your feed</p>
      )}
    </main>
  );
};

export default FeedListPage;
