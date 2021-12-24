import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeedListPage from './pages/FeedListPage';
import LibraryPage from './pages/LibraryPage';
import FeedDetailPage from './pages/FeedDetailPage';
import QueuePage from './pages/QueuePage';

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
