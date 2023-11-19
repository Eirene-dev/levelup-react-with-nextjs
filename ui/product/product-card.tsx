import type { Product } from '@/data/product';
import { ProductBestSeller } from './product-best-seller';
import { ProductRating } from './product-rating';
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard = ({
  product,
  href,
}: {
  product: Product;
  href: string;
}) => {
  return (
    <Link href={href} className="block group">
      <div className="space-y-2">
        <div className="relative">
          {product.isBestSeller ? (
            <div className="absolute z-10 flex left-2 top-2">
              <ProductBestSeller />
            </div>
          ) : null}
          <Image
            src={`/product/${product.image}`}
            width={400}
            height={400}
            className="rounded-xl grayscale group-hover:opacity-80"
            alt={product.name}
            placeholder="blur"
            blurDataURL={product.imageBlur}
          />
        </div>

        <div className="text-sm font-medium text-gray-600 truncate group-hover:text-vercel-cyan">
          {product.name}
        </div>

        {product.rating ? <ProductRating rating={product.rating} /> : null}
      </div>
    </Link>
  );
};
