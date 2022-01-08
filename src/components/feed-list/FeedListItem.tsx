import React from 'react';
import { Link } from 'react-router-dom';
import { makeUrlPath } from '../../utils/stringUtils';

export interface FeedListItemProps {
  title: string;
}

const FeedListItem = ({ title }: FeedListItemProps) => {
  return (
    <li>
      <Link to={`/feeds/${makeUrlPath(title)}`}>{title}</Link>
    </li>
  );
};

export default FeedListItem;
