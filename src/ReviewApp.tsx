import React from "react";
import "./ReviewApp.css";
import { Review } from "./models/review.model";
import { Title } from "./Components/Title/Title";
import { ReviewList } from "./Components/ReviewList/ReviewList";
import MOCK_REVIEWS from "./models/mock";

interface ReviewAppProps {}

interface ReviewAppState {
  reviews: Review[];
}

export class ReviewApp extends React.Component<ReviewAppProps, ReviewAppState> {
  state = {
    reviews: MOCK_REVIEWS
  }

  render() {
    return (
      <div className="ReviewApp">
        <Title titleName="My amazing reviews.com"/>
        <ReviewList 
        reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default ReviewApp;

//this.state.reviews