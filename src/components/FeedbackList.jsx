import { motion, AnimatePresence } from 'framer-motion';
import React, {useContext} from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  
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
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

