import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating)
    }
  }, [feedbackEdit]);
  const selectors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = e => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      {selectors.map((num, idx) => {
        return (
          <li key={idx}>
            <input
              type="radio"
              id={`num-${num}`}
              value={`${num}`}
              name="rating"
              onChange={handleChange}
              checked={selected === num}
            />
            <label htmlFor={`num-${num}`}>{num}</label>
          </li>
        );
      })}
    </ul>
  );
}
