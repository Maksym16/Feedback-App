import React, { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import CTAbutton from './shared/CTAbutton';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errText, setErrText] = useState('');
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  useEffect(() => {
    console.log(feedbackEdit)
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit]);

  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled(true);
      setErrText(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setErrText('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false);
      setErrText(null)
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

      if (feedbackEdit.edit)  {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add your raiting</h2>
        <RatingSelect select={setRating}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <CTAbutton type="Submit" isDisabled={btnDisabled}>Send</CTAbutton>
        </div>
        {errText && <div>{errText}</div>}
      </form>
    </Card>
  );
}
