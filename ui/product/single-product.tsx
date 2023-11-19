
import type { Product } from '@/data/product';
import { ProductRating } from './product-rating';
import Image from 'next/image';

export const SingleProduct = async ({ data }: { data: Promise<Response> }) => {
  const product = (await data.then((res) => res.json())) as Product;

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-full lg:col-span-1">
        <div className="space-y-2">
          <Image
            src={`/product/${product.image}`}
            className="rounded-lg grayscale lg:block"
            alt={product.name}
            height={400}
            width={400}
          />
        </div>
      </div>

      <div className="space-y-4 col-span-full lg:col-span-2">
        <div className="text-xl font-medium text-gray-800 truncate lg:text-2xl">
          제품명: {product.name}
        </div>

        <ProductRating rating={product.rating} />

        <div className="space-y-4 text-sm text-gray-600">
          <p>설명: {product.description}</p>
        </div>
      </div>
    </div>
  );
};
