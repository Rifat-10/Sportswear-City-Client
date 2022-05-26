import React from 'react';
import ReactStars from "react-rating-stars-component";
import "./Review.css";

const SingleReview = ({ review }) => {
  return (
    <div className='review_background md:h-80 '>
      <div className='py-16 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-sm'>
        <div className='container md:flex justify-evelny items-center'>
          <div className=''>
            <img
              className='image rounded-circle mx-auto'
              src={review.avatar}
              alt=''
            />
          </div>
          <div className='px-4  mx-auto'>
            <div className='text-white text-justify'>{review.message}</div>
            <div>
              <p className='text-base d-flex'>
                {/* <span className='mr-2'>Rating:</span> */}
                <ReactStars
                  count={5}
                  size={24}
                  value={review.ratting}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className='far fa-star'></i>}
                  halfIcon={<i className='fa fa-star-half-alt'></i>}
                  fullIcon={<i className='fa fa-star'></i>}
                  activeColor='#ffd700'
                />
                <span className='ml-1'>{review.ratting}</span>
              </p>
            </div>
            <div className='pt-4 tect-xl font-semibold text-white italic'>
              ~ {review.username}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;