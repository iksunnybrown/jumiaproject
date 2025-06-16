import PropTypes from 'prop-types';

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  discount,
  itemsLeft,
  className = ""
}) {
  return (
    <div className={`product-card bg-white border rounded-lg p-3 cursor-pointer ${className}`}>
      {/* Product Image */}
      <div className="relative mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain bg-gray-50 rounded"
        />
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{discount}
          </div>
        )}
      </div>

      {/* Product Title */}
      <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">
        {title}
      </h3>

      {/* Price Section */}
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">₦ {price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₦ {originalPrice}
            </span>
          )}
        </div>
        {discount && (
          <span className="text-xs text-red-600 font-medium">
            {discount} discount
          </span>
        )}
      </div>

      {/* Items Left */}
      {itemsLeft && (
        <div className="text-xs text-orange-600 font-medium">
          {itemsLeft} items left
        </div>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  originalPrice: PropTypes.string,
  discount: PropTypes.string,
  itemsLeft: PropTypes.string,
  className: PropTypes.string
};