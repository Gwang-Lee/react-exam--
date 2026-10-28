
function ProductCard({ product }) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <p style={{ color: '#888', margin: '0 0 8px 0', fontSize: '14px' }}>
        {product.category}
      </p>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#333' }}>
        {product.name}
      </h3>
      <p style={{ margin: 0, fontSize: '16px', color: '#666' }}>
        {product.price.toLocaleString()}원
      </p>
    </div>
  );
}

export default ProductCard;