import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  LocalShipping,
  Security,
  Support,
  Star,
  VerifiedUser,
} from "@mui/icons-material";
import ProductCarousel from "./carousel";
import AnimatedProductCard from "./Productcards";

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    // Update document title for SEO
    document.title =
      "ShopEase - Premium Online Shopping Experience | Quality Products & Fast Delivery";
  }, []);

  const features = [
    {
      icon: (
        <LocalShipping
          sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "primary.main" }}
        />
      ),
      title: "Fast Delivery",
      description:
        "Get your orders delivered within 24-48 hours with our express shipping service.",
    },
    {
      icon: (
        <Security
          sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "primary.main" }}
        />
      ),
      title: "Secure Payments",
      description:
        "Your payments are protected with bank-level security and encryption.",
    },
    {
      icon: (
        <Support
          sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "primary.main" }}
        />
      ),
      title: "24/7 Support",
      description:
        "Our customer support team is available round the clock to help you.",
    },
    {
      icon: (
        <VerifiedUser
          sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "primary.main" }}
        />
      ),
      title: "Quality Guarantee",
      description:
        "All products come with quality assurance and easy return policies.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Buyer",
      rating: 5,
      comment:
        "Amazing shopping experience! Fast delivery and excellent product quality. Will definitely shop again.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      rating: 5,
      comment:
        "The best online store I've ever used. Great prices, quality products, and outstanding customer service.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Verified Buyer",
      rating: 5,
      comment:
        "ShopEase has become my go-to for all my shopping needs. Reliable, fast, and trustworthy!",
      avatar: "ER",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "100K+", label: "Products Sold" },
    { number: "24/7", label: "Customer Support" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <Box>
      {/* Hero Section */}

      {/* Main Banner Section */}
      <AnimatedProductCard />
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: { xs: 6, sm: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, sm: 4 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Discover Amazing Products at{" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  SHIS Shop
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: { xs: 3, sm: 4 },
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Premium quality products, competitive prices, and lightning-fast
                delivery. Your trusted destination for all your shopping needs.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1, sm: 2 },
                  flexWrap: "wrap",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/products")}
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "white",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(245, 158, 11, 0.3)",
                    },
                  }}
                  startIcon={<ShoppingCart />}
                >
                  Shop Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 250, sm: 300, md: 140 },
                    height: { xs: 250, sm: 300, md: 140 },
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/cart")}
                >
                  <ShoppingCart
                    sx={{
                      fontSize: { xs: 80, sm: 90, md: 90 },
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Product Carousel Section */}

      {/* Stats Section */}
      <Box sx={{ py: { xs: 4, sm: 6 }, backgroundColor: "grey.50" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: "primary.main",
                      mb: 1,
                      fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, sm: 8 } }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Why Choose ShopEase?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "1rem", sm: "1.125rem" },
              }}
            >
              We're committed to providing you with the best shopping experience
              possible
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 3, sm: 4, md: 2 }}
            sx={{ marginLeft: "70px" }}
          >
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={9} key={index}>
                <Card
                  sx={{
                    height: "90%",
                    textAlign: "center",
                    p: { xs: 2, sm: 3, md: 4 },
                    "&:hover": {
                      transform: "translateY(-8px)",
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>{feature.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: { xs: 1.5, sm: 2 },
                        fontSize: { xs: "1rem", sm: "1.125rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 6, sm: 8, md: 4 }, backgroundColor: "grey.50" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6, md: 2 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              What Our Customers Say
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "1rem", sm: "1.125rem" },
              }}
            >
              Don't just take our word for it - hear from our satisfied
              customers
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
                sx={{ width: { xs: "70%", sm: "30%" } }}
              >
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: 3,
                    p: { xs: 2, sm: 3, md: 4 },
                    mx: "auto",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      transition: "transform 0.3s ease-in-out",
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        sx={{ mr: 1 }}
                      />
                      <Star sx={{ color: "secondary.main" }} />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontStyle: "italic",
                        lineHeight: 1.6,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                      }}
                    >
                      "{testimonial.comment}"
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        sx={{
                          mr: 2,
                          bgcolor: "primary.main",
                          width: { xs: 40, sm: 48 },
                          height: { xs: 40, sm: 48 },
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, sm: 8 } }}>
        <Container maxWidth="md">
          <Paper
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              textAlign: "center",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.5rem" },
              }}
            >
              Ready to Start Shopping?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: { xs: "1rem", sm: "1.125rem" },
              }}
            >
              Join thousands of satisfied customers and discover amazing
              products today
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/products")}
              sx={{
                backgroundColor: "secondary.main",
                color: "white",
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "secondary.dark",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(245, 158, 11, 0.3)",
                },
              }}
              startIcon={<ShoppingCart />}
            >
              Explore Products
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
