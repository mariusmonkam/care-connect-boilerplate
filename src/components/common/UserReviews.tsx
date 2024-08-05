// src/components/common/UserReviews.tsx
import React from "react";
import "../../styles/UserReviews.css";

interface UserReview {
  reviewer: string;
  review: string;
}

interface UserReviewsProps {
  reviews: UserReview[];
}

const UserReviews: React.FC<UserReviewsProps> = ({ reviews }) => {
  return (
    <div className="user-reviews">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>"{review.review}"</p>
          <small>- {review.reviewer}</small>
        </div>
      ))}
    </div>
  );
};

export default UserReviews;
