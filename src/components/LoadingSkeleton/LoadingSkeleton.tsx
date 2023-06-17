import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeleton = () => {
  return (
    <p>
      <Skeleton count={3} />
    </p>
  )
}

export default LoadingSkeleton;