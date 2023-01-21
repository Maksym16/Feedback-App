import React from 'react';

export default function FeedbackStats({ feedback }) {
  let avg = feedback.reduce((acc, feed) => {
    return acc + feed.rating
  }, 0) / feedback.length

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Raiting: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}
