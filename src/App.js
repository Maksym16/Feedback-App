import React, { useState } from 'react';
import './index.css'
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = id => {
    if (window.confirm('Are u sure u want to delete?')) {
      const newFeeds = feedback.filter(feed => {
        return feed.id !== id;
      });
      setFeedback(newFeeds);
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}
