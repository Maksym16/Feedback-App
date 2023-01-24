import React, { useState } from 'react';
import Card from './shared/Card';
import CTAbutton from './shared/CTAbutton';
import RatingSelect from './RatingSelect';

export default function FeedbackForm({addFeedback}) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errText, setErrText] = useState('');

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
      addFeedback(newFeedback)
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
