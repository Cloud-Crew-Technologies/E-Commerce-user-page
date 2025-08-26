import React, { useState, useEffect } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { ShoppingCart, Star, Pause, Play } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const MultipleCardsCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

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

        // Duplicate products for smooth infinite scroll
        const duplicatedProducts = [
          ...productsData,
          ...productsData,
          ...productsData,
        ];
        setProducts(duplicatedProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
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

  const getProductImage = (product) => product.imageUrl;

  const formatPrice = (price) => {
    if (typeof price === "number") return price.toFixed(2);
    if (typeof price === "string") return parseFloat(price).toFixed(2);
    return "0.00";
  };

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
  };

  if (loading)
    return (
      <div className="min-h-screen d-flex align-items-center justify-content-center bg-light">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen d-flex align-items-center justify-content-center bg-light">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );

  if (!products.length)
    return (
      <div className="min-h-screen d-flex align-items-center justify-content-center bg-light">
        <div className="alert alert-info" role="alert">
          No products available
        </div>
      </div>
    );

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        .carousel-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 2rem 0;
        }

        .carousel-track {
          display: flex;
          animation: slideLeftContinuous 30s linear infinite;
          animation-play-state: ${isPaused ? "paused" : "running"};
          gap: 1.5rem;
          padding-left: 1.5rem;
        }

        @keyframes slideLeftContinuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .product-card {
          flex: 0 0 320px;
          transition: all 0.3s ease;
          cursor: pointer;
          animation: cardFloat 4s ease-in-out infinite;
        }

        .product-card:nth-child(odd) {
          animation-delay: -2s;
        }

        .product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
          z-index: 10;
          position: relative;
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .card-image {
          height: 220px;
          object-fit: cover;
          transition: all 0.5s ease;
        }

        .product-card:hover .card-image {
          transform: scale(1.1);
        }

        .badge-floating {
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .price-highlight {
          background: linear-gradient(135deg, #0d6efd, #6f42c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: priceShine 3s ease-in-out infinite;
        }

        @keyframes priceShine {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .cta-button {
          background: linear-gradient(135deg, #0d6efd, #6f42c1);
          border: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .control-button {
          position: fixed;
          top: 50%;
          right: 2rem;
          z-index: 1000;
          background: rgba(13, 110, 253, 0.9);
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .control-button:hover {
          background: rgba(13, 110, 253, 1);
          transform: scale(1.1);
        }

        .carousel-header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 1rem;
        }

        .star-rating {
          transition: all 0.3s ease;
        }

        .product-card:hover .star-rating {
          transform: scale(1.1);
        }
      `}</style>

      <div className="min-h-screen bg-light position-relative">
        {/* Header */}
        <div className="carousel-header">
          <h2 className="display-4 fw-bold text-primary mb-3">
            Featured Products
          </h2>
          <p className="lead text-muted">
            Discover our amazing collection of premium products
          </p>
        </div>

        {/* Play/Pause Control */}
        <Button
          onClick={toggleAnimation}
          className="control-button text-white d-flex align-items-center justify-content-center"
          title={isPaused ? "Play Animation" : "Pause Animation"}
        >
          {isPaused ? <Play size={24} /> : <Pause size={24} />}
        </Button>

        {/* Multiple Cards Carousel */}
        <div className="carousel-container">
          <div className="carousel-track">
            {products.map((product, index) => (
              <div
                key={`${product.id || index}-${index}`}
                className="product-card"
              >
                <Card className="h-100 shadow border-0 overflow-hidden">
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={getProductImage(product)}
                      alt={product.name}
                      className="card-image"
                    />

                    {/* Floating Stock Badge */}
                    <Badge
                      bg={product.quantity > 0 ? "success" : "danger"}
                      className="badge-floating position-absolute top-0 start-0 m-2 px-2 py-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                    </Badge>

                    {/* Category Badge */}
                    {product.category && (
                      <Badge
                        bg="primary"
                        className="position-absolute top-0 end-0 m-2 px-2 py-1"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {product.category}
                      </Badge>
                    )}
                  </div>

                  <Card.Body className="p-3 d-flex flex-column">
                    <Card.Title className="h6 mb-2 fw-bold text-truncate">
                      {product.name}
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted small font-monospace">
                      SKU: {product.sku || product.id || "WRSEDGFHJJ"}
                    </Card.Subtitle>

                    {/* Rating */}
                    <div className="star-rating d-flex align-items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={`me-1 ${
                            star <= Math.round(product.rating || 0)
                              ? "text-warning"
                              : "text-muted"
                          }`}
                          fill={
                            star <= Math.round(product.rating || 0)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                      <small className="text-muted ms-1">
                        ({product.rating || 0})
                      </small>
                    </div>

                    <Card.Text
                      className="text-muted small mb-3 flex-grow-1"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {product.description && product.description.length > 80
                        ? `${product.description.substring(0, 80)}...`
                        : product.description ||
                          "Premium quality product with excellent features."}
                    </Card.Text>

                    {/* Price */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <h5 className="price-highlight mb-0 me-2 fw-bold">
                          ₹{formatPrice(product.price)}
                        </h5>
                        {product.originalPrice && (
                          <small className="text-muted text-decoration-line-through">
                            ₹{formatPrice(product.originalPrice)}
                          </small>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="primary"
                      disabled={product.quantity === 0}
                      className="cta-button w-100 d-flex align-items-center justify-content-center py-2 fw-semibold"
                      style={{ fontSize: "0.9rem" }}
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={16} className="me-2" />
                      {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center py-4">
          <p className="text-muted mb-0">
            <small>
              Hover over cards to pause • Click play/pause button to control
              animation
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default MultipleCardsCarousel;
