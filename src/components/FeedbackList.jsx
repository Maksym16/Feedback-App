import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

export default function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || !feedback.length) {
    return <p>No Feedback</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map(feed => (
        <FeedbackItem
          key={feed.id}
          id={feed.id}
          text={feed.text}
          rating={feed.rating}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
