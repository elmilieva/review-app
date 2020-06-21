import React from "react";
import "./ReviewItem.css";

type ReviewItemProps = {
  id: number;
  text: string;
  pic: string;
  reviewer: string;
};

export const ReviewItem = ({ id, text, pic, reviewer }: ReviewItemProps) => {
  return (
    <li className="review-item">
      <div className="flex-container">
        <img className="flex-item review-image" src={pic} alt="Bike image" />
        <p className="flex-item flex-text">{text}</p>
        <p className="flex-item review-reviewer">{reviewer}</p> 
      </div>
    </li>
  );
};
