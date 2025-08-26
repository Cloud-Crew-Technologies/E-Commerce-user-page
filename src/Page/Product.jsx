import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Skeleton,
  Box,
  Rating,
  Snackbar,
  Alert,
  Chip,
  useTheme,
  useMediaQuery,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Paper,
  InputAdornment,
  IconButton,
  Collapse,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import axios from "axios";

export default function Products() {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, searchQuery, selectedCategory, priceRange, sortBy]);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/products/get"
      );

      const categoryData = response.data;
      if (Array.isArray(categoryData)) {
        setProduct(categoryData);
      } else if (categoryData && Array.isArray(categoryData.data)) {
        setProduct(categoryData.data);
      } else {
        console.warn("Unexpected response structure:", categoryData);
        setProduct([]);
      }
    } catch (error) {
      console.error("Error fetching Products:", error);
      setProduct([]);
    } finally {
      setIsLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sorting
    if (sortBy) {
      switch (sortBy) {
        case "price-low":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "name":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "rating":
          filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setPriceRange([0, 10000]);
    setSortBy("");
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    setOpenSnackbar(true);
  };

  // Get unique categories for filter dropdown
  const categories = [...new Set(products.map((product) => product.category))];

  // Get price range for slider
  const maxPrice = Math.max(...products.map((product) => product.price), 10000);

  const LoadingSkeleton = () => (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%" }}>
        <Skeleton variant="rectangular" height={{ xs: 180, sm: 200 }} />
        <CardContent>
          <Skeleton variant="text" height={32} />
          <Skeleton variant="text" width="60%" />
          <Box sx={{ mt: 2 }}>
            <Skeleton variant="text" width="40%" />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Skeleton variant="text" width="30%" />
          </Box>
        </CardContent>
        <CardActions>
          <Skeleton variant="rectangular" width={120} height={36} />
        </CardActions>
      </Card>
    </Grid>
  );

  const ProductCard = ({ product, index }) => (
    <Grid
      item
      xs={12}
      sm={3}
      md={4}
      sx={{
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
      }}
    >
      {" "}
      <Card
        sx={{
          height: "70%",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: 8,
            "& .product-image": {
              transform: "scale(1.05)",
            },
          },
        }}
      >
        {/* Discount Badge */}
        {product.discountPercentage > 15 && (
          <Chip
            icon={<LocalOfferIcon />}
            label={`${Math.round(product.discountPercentage)}% OFF`}
            color="secondary"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
            }}
          />
        )}

        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.name}
          className="product-image"
          sx={{
            transition: "transform 0.3s ease-in-out",
            height:"160px",
          }}
        />

        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 2,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.description}
          </Typography>

          {product.rating && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Rating
                value={product.rating}
                readOnly
                size="small"
                sx={{ mr: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                ({product.rating})
              </Typography>
            </Box>
          )}

          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <Chip
              label={product.category}
              size="small"
              sx={{
                backgroundColor: "primary.50",
                color: "primary.main",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "primary.main",
              }}
            >
              ₹{product.price}
            </Typography>
            {product.originalPrice && (
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "line-through",
                  color: "text.secondary",
                }}
              >
                ₹{product.originalPrice}
              </Typography>
            )}
          </Box>
        </CardContent>

        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => addToCart(product)}
            startIcon={<ShoppingCartIcon />}
            sx={{
              py: 1.5,
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 2 } }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 1, sm: 1 }}}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Our Premium Products
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              maxWidth: 800,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              lineHeight: 1.6,
            }}
          >
            Discover our curated collection of high-quality products
          </Typography>
        </Box>

        {/* Search and Filter Section */}
        <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
          {/* Search Bar */}
          <Box sx={{ mb: 1 }}>
            <TextField
              fullWidth
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setSearchQuery("")} size="small">
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Filter Toggle Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Button
              startIcon={<FilterListIcon />}
              endIcon={showFilters ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              onClick={() => setShowFilters(!showFilters)}
              variant="outlined"
            >
              Filters
            </Button>
            <Button onClick={clearFilters} color="secondary">
              Clear All Filters
            </Button>
          </Box>

          {/* Collapsible Filters */}
          <Collapse in={showFilters}>
            <Grid container spacing={3}>
              {/* Category Filter */}
              <Grid item xs={12} sm={6} md={5} sx={{ width: "10%" }}>
                <FormControl fullWidth >
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <MenuItem value="">All Categories</MenuItem>
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Sort By */}
              <Grid item xs={12} sm={6} md={3} sx={{ width: "10%" }}>
                <FormControl fullWidth>
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sortBy}
                    label="Sort By"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <MenuItem value="">Default</MenuItem>
                    <MenuItem value="price-low">Price: Low to High</MenuItem>
                    <MenuItem value="price-high">Price: High to Low</MenuItem>
                    <MenuItem value="name">Name: A to Z</MenuItem>
                    <MenuItem value="rating">Rating: High to Low</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Price Range */}
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>
                  Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                </Typography>
                <Slider
                  value={priceRange}
                  onChange={(e, newValue) => setPriceRange(newValue)}
                  valueLabelDisplay="auto"
                  min={0}
                  max={maxPrice}
                  sx={{ mt: 1 }}
                />
              </Grid>
            </Grid>
          </Collapse>

          {/* Results Count */}
          <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: "divider" }}>
            <Typography variant="body2" color="text.secondary">
              Showing {filteredProducts.length} of {products.length} products
            </Typography>
          </Box>
        </Paper>

        {/* Products Grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ height: "90%" }}>
          {loading ? (
            Array.from({ length: 9 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          ) : (
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No products found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Try adjusting your search or filter criteria
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* Snackbar for cart notification */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product added to cart successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
