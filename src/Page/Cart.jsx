import React, { useState, useEffect } from "react";
import { 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardMedia,
  IconButton,
  Box,
  Paper,
  Grid,
  ButtonGroup,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
  Fade,
  Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Update document title for SEO
    document.title = "Shopping Cart - Review Your Items | ShopEase";
    
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    // Dispatch custom event to update cart badge
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter(item => item.id !== itemId);
    updateCart(newCart);
  };

  const updateQuantity = (itemId, change) => {
    const newCart = cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const subtotal = total;
  const shipping = 0; // Free shipping
  const tax = total * 0.18; // 18% tax
  const finalTotal = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <Container sx={{ py: { xs: 6, sm: 8 }, textAlign: 'center', minHeight: '60vh' }}>
        <Fade in={true}>
          <Box>
            <ShoppingCartIcon sx={{ 
              fontSize: { xs: 60, sm: 80 }, 
              color: 'text.secondary', 
              mb: { xs: 2, sm: 3 } 
            }} />
            <Typography variant="h4" gutterBottom sx={{ 
              fontWeight: 600,
              fontSize: { xs: '1.75rem', sm: '2.125rem' }
            }}>
              Your cart is empty
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph sx={{ 
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}>
              Looks like you haven't added any products to your cart yet. 
              Start shopping to discover amazing products!
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate("/products")}
              sx={{ 
                px: { xs: 3, sm: 4 }, 
                py: { xs: 1, sm: 1.5 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.25)'
                }
              }}
              startIcon={<ShoppingCartIcon />}
            >
              Continue Shopping
            </Button>
          </Box>
        </Fade>
      </Container>
    );
  }

  return (
    <Container sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Typography 
        variant="h1" 
        sx={{ 
          fontWeight: 700, 
          mb: { xs: 3, sm: 4 },
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}
      >
        Shopping Cart
      </Typography>

      <Grid container spacing={{ xs: 3, sm: 4 }}>
        {/* Cart Items */}
        <Grid item xs={12} lg={8} sm={12} sx={{width: { xs: '100%', sm: '45%' } }}>
          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            {cart.map((item, index) => (
              <Fade in={true} key={item.id} style={{ transitionDelay: `${index * 100}ms` }}>
                <Card sx={{ 
                  mb: { xs: 2, sm: 3 }, 
                  p: { xs: 2, sm: 3 },
                  borderRadius: 2
                }}>
                  <Grid container spacing={{ xs: 2, sm: 3 }} alignItems="center">
                    <Grid item xs={4} sm={3} md={2}>
                      <CardMedia
                        component="img"
                        image={item.imageUrl}
                        alt={item.title}
                        sx={{
                          height: { xs: 80, sm: 100, md: 120 },
                          borderRadius: 1,
                          objectFit: 'cover'
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={8} sm={9} md={10}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Box sx={{ flex: 1, mr: 2 }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                fontWeight: 600, 
                                mb: 1,
                                fontSize: { xs: '1rem', sm: '1.125rem' },
                                lineHeight: 1.3
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                              <Chip 
                                label={item.category} 
                                size={isSmallMobile ? "small" : "medium"}
                                sx={{ 
                                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                  backgroundColor: 'primary.50',
                                  color: 'primary.main'
                                }}
                              />
                              <Chip 
                                label={item.category} 
                                size={isSmallMobile ? "small" : "medium"}
                                sx={{ 
                                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                  backgroundColor: 'secondary.50',
                                  color: 'secondary.main'
                                }}
                              />
                            </Box>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'text.secondary',
                                fontSize: { xs: '0.875rem', sm: '1rem' }
                              }}
                            >
                              ₹{item.price} each
                            </Typography>
                          </Box>
                          
                          <IconButton
                            onClick={() => removeItem(item.id)}
                            sx={{ 
                              color: 'error.main',
                              '&:hover': { backgroundColor: 'error.50' }
                            }}
                          >
                            <DeleteOutlineIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                          </IconButton>
                        </Box>
                        
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          flexWrap: { xs: 'wrap', sm: 'nowrap' },
                          gap: { xs: 1, sm: 2 }
                        }}>
                          <ButtonGroup 
                            size={isSmallMobile ? "small" : "medium"}
                            sx={{ 
                              '& .MuiButton-root': {
                                minWidth: { xs: 32, sm: 40 },
                                height: { xs: 32, sm: 40 }
                              }
                            }}
                          >
                            <Button
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                            >
                              <RemoveIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
                            </Button>
                            <Button disabled sx={{ 
                              minWidth: { xs: 40, sm: 50 },
                              fontSize: { xs: '0.875rem', sm: '1rem' }
                            }}>
                              {item.quantity}
                            </Button>
                            <Button onClick={() => updateQuantity(item.id, 1)}>
                              <AddIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
                            </Button>
                          </ButtonGroup>
                          
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 700, 
                              color: 'primary.main',
                              fontSize: { xs: '1.125rem', sm: '1.25rem' }
                            }}
                          >
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Fade>
            ))}
          </Box>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} lg={4} sm={12} sx={{width: { xs: '100%', sm: '46%' } }}>
          <Paper 
            sx={{ 
              p: { xs: 3, sm: 4 },
              border: '1px solid',
              borderColor: 'grey.200',
              borderRadius: 3,
              position: { lg: 'sticky' },
              top: { lg: 24 }
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600, 
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              Order Summary
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  Subtotal ({cart.length} items)
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  ₹{subtotal.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  Shipping
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'success.main',
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}>
                  FREE
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  Tax (18%)
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  ₹{tax.toFixed(2)}
                </Typography>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '1.125rem', sm: '1.25rem' }
                  }}
                >
                  Total
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    color: 'primary.main',
                    fontSize: { xs: '1.125rem', sm: '1.25rem' }
                  }}
                >
                  ₹{finalTotal.toFixed(2)}
                </Typography>
              </Box>
            </Box>
            
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={() => navigate("/checkout")}
              sx={{
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
                mb: 3,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.25)'
                }
              }}
            >
              Proceed to Checkout
            </Button>
            
            {/* Trust Badges */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary', 
                  mb: 2,
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              >
                Secure Checkout
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 2 } }}>
                <SecurityIcon sx={{ 
                  color: 'success.main', 
                  fontSize: { xs: 20, sm: 24 } 
                }} />
                <LocalShippingIcon sx={{ 
                  color: 'info.main', 
                  fontSize: { xs: 20, sm: 24 } 
                }} />
                <SupportIcon sx={{ 
                  color: 'warning.main', 
                  fontSize: { xs: 20, sm: 24 } 
                }} />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
