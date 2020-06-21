import React from "react";
import { Review } from "./../../models/review.model";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <ul>
      {reviews.map((review) => 
        <ReviewItem
          id={review.id}
          text={review.text}
          pic={review.pic}
          reviewer={review.reviewer}
        />
      )}
    </ul>
  );
};
