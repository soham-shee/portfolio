import React, { useState } from 'react';

const Likebtn = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className='transparent'>
      <button onClick={handleLike}>
        {isLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default Likebtn;