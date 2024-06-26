

import React from 'react'; // Import React

const Message = ({ onGetPostClick }) => {
  return (
    <div>
      <h1 className="message">Welcome! Share with others what's on your mind</h1> {/* Fixed typo */}
      <button onClick={onGetPostClick} type="button" className="btn btn-secondary button">Fetch Posts</button>
    </div>
  );
};

export default Message;
