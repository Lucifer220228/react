import React, { useState } from 'react';

interface DogCardProps {
  name: string;
  description: string;
  image: string;
}

const DogCard: React.FC<DogCardProps> = ({ name, description, image }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="dog-card">
      <img src={image} alt={name} className="dog-image" />
      <h3>{name}</h3> 
      <p>
        {showMore ? description : description.substring(0, 20) + '...'}
        <button className="toggle-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? '顯示較少' : '顯示更多'}
        </button>
      </p>
    </div>
  );
};
export default DogCard;


