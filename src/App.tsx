import React from 'react';
import './App.css';
import AppBar from './components/app-bar/AppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import FeedListPage from './pages/feed-list/FeedListPage';
import LibraryPage from './pages/library/LibraryPage';
import FeedDetailPage from './pages/feed-detail/FeedDetailPage';
import QueuePage from './pages/queue/QueuePage';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feeds/:feedName" element={<FeedDetailPage />} />
          <Route path="/feeds" element={<FeedListPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/queue" element={<QueuePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
