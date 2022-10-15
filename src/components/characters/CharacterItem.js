import React from 'react';

const CharacterItem = ({
  img,
  name,
  portrayed,
  nickname,
  birthday,
  status,
  occupation,
  appearance,
}) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img
            src={img}
            alt='Here is an avatar of a cast member from Breaking Bad tv show'
          />
        </div>
        <div className='card-back'>
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {nickname}
            </li>
            <li>
              <strong>Occupation:</strong> {occupation}
            </li>
            <li>
              <strong>Birthday:</strong> {birthday}
            </li>
            <li>
              <strong>Status:</strong> {status}
            </li>
            <li>
              <strong>Appearances:</strong> {appearance}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
