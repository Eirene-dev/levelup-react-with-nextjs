import { StarIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

export const ProductRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-x-1">
      <span>평점: </span>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
            <StarIcon
              key={i}
              className={clsx('w-4', i < rating ? 'text-gray-800' : 'text-gray-300')}
            />
        );
      })}
    </div>
  );
};
