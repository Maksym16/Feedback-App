import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

export default function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || !feedback.length) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map(feed => (
          <motion.div
            key={feed.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={feed.id}
              id={feed.id}
              text={feed.text}
              rating={feed.rating}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
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
