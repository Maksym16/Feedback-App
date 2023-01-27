import React, { useContext } from 'react';
import Card from './shared/Card';
import { FaEdit, FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({id, text, rating}) {
  const { handleDelete, handleUpdate } = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleUpdate({id, text, rating})} className="edit">
        <FaEdit color='purple'/>
      </button>
      <button onClick={() => handleDelete(id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">
        {text}
      </div>
    </Card>
  );
}
