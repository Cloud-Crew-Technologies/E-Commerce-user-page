import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ShoppingCart, Star, Sparkles, Zap, Gift } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/api/products/get");
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();

        let productsData;
        if (data.success && data.data) productsData = data.data;
        else if (Array.isArray(data)) productsData = data;
        else if (data.products) productsData = data.products;
        else throw new Error("Invalid response format");

        if (!Array.isArray(productsData) || !productsData.length)
          throw new Error("No products found");

        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case "Best Seller":
        return <Zap className="w-3 h-3" />;
      case "New Release":
        return <Sparkles className="w-3 h-3" />;
      case "Limited Edition":
        return <Gift className="w-3 h-3" />;
      default:
        return <Star className="w-3 h-3" />;
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "bg-gradient-to-r from-yellow-400 to-orange-500";
      case "New Release":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Limited Edition":
        return "bg-gradient-to-r from-red-500 to-pink-600";
      case "Premium Choice":
        return "bg-gradient-to-r from-blue-500 to-indigo-600";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  const getProductImage = (product) => product.imageUrl;
  const formatPrice = (price) => {
    if (typeof price === "number") return price.toFixed(2);
    if (typeof price === "string") return parseFloat(price).toFixed(2);
    return "0.00";
  };
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Dispatch custom event to update cart badge
    window.dispatchEvent(new Event("cartUpdated"));

    setOpenSnackbar(true);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-pink-100">
        <div className="alert alert-danger text-center" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p className="mb-0">{error}</p>
        </div>
      </div>
    );

  if (!products.length)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
        <div className="alert alert-info text-center" role="alert">
          <h4 className="alert-heading">No Products</h4>
          <p className="mb-0">No products available at the moment.</p>
        </div>
      </div>
    );

  return (
    <div
      className="position-relative"
      style={{
        height: "67vh",
        marginTop: "2px",
        width: "100%",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "0px",
        borderRadius: "20px",
      }}
    >
      <style jsx>{`
        .carousel-item {
          height: 67vh;
          text-align: center;
          margin-top: 2px;
        }
        .carousel-caption {
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          left: 5%;
          right: auto;
          bottom: 20%;
          max-width: 600px;
          text-align: left;
          transform: none;
        }
        .carousel-control-prev,
        .carousel-control-next {
          width: 5%;
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          padding: 20px;
        }
        .carousel-indicators [data-bs-target] {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 5px;
        }
        .product-image {
          height: 100vh;
          width: 100%;
          object-fit: cover;
          filter: brightness(0.7);
        }
        .badge-custom {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 10;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          color: white;
        }
        .stock-indicator {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          color: white;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={4000}
        pause="hover"
        fade
      >
        {products.map((product, idx) => (
          <Carousel.Item key={product.id || idx}>
            {/* Product Image */}
            <img
              className="d-block product-image"
              src={getProductImage(product)}
              alt={product.name}
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=800&fit=crop&q=80";
              }}
            />

            {/* Badge */}
            {product.badge && (
              <div className={`badge-custom ${getBadgeColor(product.badge)}`}>
                {getBadgeIcon(product.badge)}
                <span>{product.badge}</span>
              </div>
            )}

            {/* Stock Indicator */}
            <div
              className={`stock-indicator ${
                product.quantity > 0 ? "bg-success" : "bg-danger"
              }`}
            >
              {product.quantity > 10 ? (
                <>
                  <div className="pulse-dot"></div>
                  <span>In Stock</span>
                </>
              ) : product.quantity < 10 ? (
                <>
                  <div
                    className="pulse-dot"
                    style={{ backgroundColor: "orange" }}
                  ></div>
                  <span>Low Stock</span>
                </>
              ) : (
                <span>Out of Stock</span>
              )}
            </div>

            {/* Product Details */}
            <Carousel.Caption>
              <div className="mb-3">
                <span className="badge bg-primary px-3 py-2 text-uppercase fw-bold">
                  {product.category || "Product"}
                </span>
              </div>

              <h2 className="display-4 fw-bold mb-4 text-white">
                {product.name}
              </h2>

              <p className="lead mb-4 text-white-50">
                {product.description || "No description available."}
              </p>

              {/* Rating */}
              <div className="d-flex align-items-center mb-4">
                {[...Array(Math.round(product.rating || 5))].map((_, i) => (
                  <Star
                    key={i}
                    className="text-warning me-1"
                    style={{
                      width: "20px",
                      height: "20px",
                      fill: "currentColor",
                    }}
                  />
                ))}
                <span className="ms-2 text-white fw-medium">
                  ({product.rating || 5})
                </span>
              </div>

              {/* Price and CTA */}
              <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
                <div className="d-flex align-items-center">
                  <span
                    className="display-5 fw-bold text-white bg-gradient px-4 py-2 rounded-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    ₹{formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="fs-4 text-muted text-decoration-line-through ms-3">
                      ₹{formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <button
                  disabled={product.quantity === 0}
                  className={`btn btn-lg d-flex align-items-center gap-2 px-4 py-3 fw-semibold ${
                    product.quantity > 0 ? "btn-primary" : "btn-secondary"
                  }`}
                  style={{
                    background:
                      product.quantity > 0
                        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        : undefined,
                    border: "none",
                  }}
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart style={{ width: "20px", height: "20px" }} />
                  {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
