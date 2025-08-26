import React, { useEffect } from "react";
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Paper, 
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  LocalShipping,
  Email,
  Support,
  Star
} from "@mui/icons-material";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Update document title for SEO
    document.title = "Payment Successful - Thank You for Your Order | ShopEase";
  }, []);

  const nextSteps = [
    {
      icon: <Email sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />,
      title: "Order Confirmation",
      description: "You'll receive an email confirmation with your order details and tracking information."
    },
    {
      icon: <LocalShipping sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'secondary.main' }} />,
      title: "Fast Delivery",
      description: "Your order will be processed and shipped within 24 hours with express delivery."
    },
    {
      icon: <Support sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'success.main' }} />,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock if you need any assistance."
    }
  ];

  const recommendations = [
    {
      title: "Explore More Products",
      description: "Discover our latest collection of premium products",
      action: "Shop Now",
      onClick: () => navigate("/products")
    },
    {
      title: "Track Your Order",
      description: "Get real-time updates on your order status",
      action: "Track Order",
      onClick: () => navigate("/")
    },
    {
      title: "Leave a Review",
      description: "Share your experience and help other customers",
      action: "Review",
      onClick: () => navigate("/")
    }
  ];

  return (
    <Box sx={{ py: { xs: 3, sm: 4, md: 6 }, minHeight: '100vh' }}>
      <Container maxWidth="xl">
        {/* Success Message */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 } }}>
          <Zoom in={true} style={{ transitionDelay: '200ms' }}>
            <Box sx={{ mb: { xs: 3, sm: 4 } }}>
              <CheckCircle 
                sx={{ 
                  fontSize: { xs: 80, sm: 100, md: 120 }, 
                  color: 'success.main',
                  mb: { xs: 2, sm: 3 }
                }} 
              />
            </Box>
          </Zoom>
          
          <Fade in={true} style={{ transitionDelay: '400ms' }}>
            <Box>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  color: 'success.main'
                }}
              >
                Payment Successful! 🎉
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'text.secondary',
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
                }}
              >
                Thank you for your purchase! Your order has been confirmed and will be processed shortly. 
                You'll receive an email confirmation with all the details.
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Next Steps */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              fontWeight: 600, 
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' }
            }}
          >
            What's Next?
          </Typography>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {nextSteps.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={true} style={{ transitionDelay: `${600 + index * 200}ms` }}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    p: { xs: 2, sm: 3 },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'all 0.3s ease-in-out'
                    }
                  }}>
                    <CardContent>
                      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                        {step.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          mb: { xs: 1.5, sm: 2 },
                          fontSize: { xs: '1rem', sm: '1.125rem' }
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.875rem', sm: '1rem' }
                        }}
                      >
                        {step.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Recommendations */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              fontWeight: 600, 
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' }
            }}
          >
            Continue Your Shopping Journey
          </Typography>
          
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {recommendations.map((rec, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={true} style={{ transitionDelay: `${1200 + index * 200}ms` }}>
                  <Paper 
                    sx={{ 
                      p: { xs: 2, sm: 3, md: 4 }, 
                      textAlign: 'center',
                      height: '100%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'all 0.3s ease-in-out'
                      }
                    }}
                  >
                    <Typography variant="h5" sx={{ 
                      fontWeight: 600, 
                      mb: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '1.125rem', sm: '1.25rem' }
                    }}>
                      {rec.title}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      mb: { xs: 2, sm: 3 }, 
                      opacity: 0.9,
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      {rec.description}
                    </Typography>
                    <Button 
                      variant="contained" 
                      onClick={rec.onClick}
                      sx={{ 
                        backgroundColor: 'secondary.main',
                        color: 'white',
                        px: { xs: 2, sm: 3 },
                        py: { xs: 1, sm: 1.5 },
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        '&:hover': {
                          backgroundColor: 'secondary.dark'
                        }
                      }}
                    >
                      {rec.action}
                    </Button>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Customer Satisfaction */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
          <Paper sx={{ 
            p: { xs: 2, sm: 3, md: 4 }, 
            borderRadius: 3, 
            textAlign: 'center' 
          }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 600, 
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}>
              We Value Your Feedback
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: { xs: 3, sm: 4 }, 
              color: 'text.secondary',
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}>
              Your satisfaction is our priority. Share your experience and help us improve our services.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: { xs: 2, sm: 3 } }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} sx={{ 
                  color: 'secondary.main', 
                  fontSize: { xs: 24, sm: 28, md: 32 } 
                }} />
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ 
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}>
              Rate your shopping experience
            </Typography>
          </Paper>
        </Box>

        {/* CTA Buttons */}
        <Box sx={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate("/")}
            sx={{ 
              px: { xs: 4, sm: 6 }, 
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontWeight: 600,
              mr: { xs: 1, sm: 2 },
              mb: { xs: 1, sm: 2 },
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(37, 99, 235, 0.25)'
              }
            }}
          >
            Back to Home
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            onClick={() => navigate("/products")}
            sx={{ 
              px: { xs: 4, sm: 6 }, 
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontWeight: 600,
              mb: { xs: 1, sm: 2 },
              '&:hover': {
                transform: 'translateY(-2px)'
              }
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
