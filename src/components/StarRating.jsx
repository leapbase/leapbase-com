import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { usePageData } from '../pages/PageContext';

export default function StarRating(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  
  let { rating, onRatingChange, readOnly = false, size = 5 } = props.config || {};
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [starRating, setStarRating] = useState(rating);
  
  // useEffect(() => {
  //   if (blockContext && blockContext.data) {
  //     setStarRating(pageData.rating || 0);
  //   }
  // }, [blockContext]);
  
  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <Star
          key={star}
          className={`w-${size} h-${size} transition-colors duration-200 ${
            star <= starRating ? 'text-yellow-400 fill-current' : 'text-slate-300'
          } ${!readOnly ? 'cursor-pointer' : ''}`}
          onClick={() => !readOnly && onRatingChange && onRatingChange(star)}
        />
      ))}
    </div>
  );
}
