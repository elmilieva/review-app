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
    <div>
      <h2> {id} </h2>
      <h2> {text} </h2>
      <h2> {pic} </h2>
      <h2> {reviewer} </h2>
    </div>
  );
};
