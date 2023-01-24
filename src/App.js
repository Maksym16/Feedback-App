import React, { useState } from 'react';
import './index.css'
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
  }
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
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}
