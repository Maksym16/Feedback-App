import React from 'react';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa'

export default function FeedbackItem({id, text, rating, handleDelete}) {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDelete(id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">
        {text}
      </div>
    </Card>
  );
}
