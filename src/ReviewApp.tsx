import React from 'react';
import './ReviewApp.css';
import { Review } from './models/review.model';
import { Title } from './Components/Title/Title';
import { ReviewItem } from './Components/ReviewItem/ReviewItem';

interface ReviewAppProps{

}

interface ReviewAppState{
  reviews: Review[];
}

class ReviewApp extends React.Component<ReviewAppProps,ReviewAppState>{
  // const r = new Review('bla', 'bla','Pesho');
  // const r2 = new Review('bla', 'bla','Ginka');
  // const r3 = new Review('bla', 'bla','Penka');
  // console.log(r);
  // console.log(r2);
  // console.log(r3);

  render(){
    return (
      <div className="ReviewApp">
        <Title titleName="My amazing reviews.com"/>
        <ReviewItem id={1} text="This bike is awesome!" pic="bike" reviewer="retart Ivanov"/>
      </div>
    );
  }
}

export default ReviewApp;
