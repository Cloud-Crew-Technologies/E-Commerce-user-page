import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  ExpandMore
} from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const faqData = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in original packaging."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely! We use industry-standard SSL encryption and secure payment gateways to protect your data."
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'white',
        mt: 'auto',
        pt: { xs: 6, sm: 8 },
        pb: { xs: 3, sm: 4 }
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, sm: 6 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ 
              fontWeight: 700, 
              mb: 3,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
            }}>
              ShopEase
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 4, 
              color: 'grey.300', 
              lineHeight: 1.7, 
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}>
              Your trusted destination for premium quality products. We're committed to providing 
              exceptional shopping experiences with fast delivery and excellent customer service.
            </Typography>
            <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
              <IconButton 
                sx={{ 
                  color: 'grey.300', 
                  backgroundColor: 'grey.800',
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  '&:hover': { 
                    color: 'primary.main',
                    backgroundColor: 'grey.700',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <Facebook sx={{ fontSize: { xs: 18, sm: 20 } }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'grey.300', 
                  backgroundColor: 'grey.800',
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  '&:hover': { 
                    color: 'primary.main',
                    backgroundColor: 'grey.700',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <Twitter sx={{ fontSize: { xs: 18, sm: 20 } }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'grey.300', 
                  backgroundColor: 'grey.800',
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  '&:hover': { 
                    color: 'primary.main',
                    backgroundColor: 'grey.700',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <Instagram sx={{ fontSize: { xs: 18, sm: 20 } }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'grey.300', 
                  backgroundColor: 'grey.800',
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  '&:hover': { 
                    color: 'primary.main',
                    backgroundColor: 'grey.700',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <LinkedIn sx={{ fontSize: { xs: 18, sm: 20 } }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 3, 
              color: 'white',
              fontSize: { xs: '1rem', sm: '1.125rem' }
            }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
              <Link 
                href="/" 
                sx={{ 
                  color: 'grey.300', 
                  textDecoration: 'none', 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 500,
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateX(4px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                sx={{ 
                  color: 'grey.300', 
                  textDecoration: 'none', 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 500,
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateX(4px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Products
              </Link>
              <Link 
                href="/cart" 
                sx={{ 
                  color: 'grey.300', 
                  textDecoration: 'none', 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 500,
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateX(4px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Cart
              </Link>
              <Link 
                href="/checkout" 
                sx={{ 
                  color: 'grey.300', 
                  textDecoration: 'none', 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 500,
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateX(4px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Checkout
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 3, 
              color: 'white',
              fontSize: { xs: '1rem', sm: '1.125rem' }
            }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 } }}>
                <Box sx={{ 
                  backgroundColor: 'primary.main', 
                  borderRadius: '50%', 
                  p: { xs: 0.75, sm: 1 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Email sx={{ fontSize: { xs: 16, sm: 20 } }} />
                </Box>
                <Typography variant="body1" sx={{ 
                  color: 'grey.300', 
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}>
                  support@shopease.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 } }}>
                <Box sx={{ 
                  backgroundColor: 'primary.main', 
                  borderRadius: '50%', 
                  p: { xs: 0.75, sm: 1 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone sx={{ fontSize: { xs: 16, sm: 20 } }} />
                </Box>
                <Typography variant="body1" sx={{ 
                  color: 'grey.300', 
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}>
                  +91 1800-123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 } }}>
                <Box sx={{ 
                  backgroundColor: 'primary.main', 
                  borderRadius: '50%', 
                  p: { xs: 0.75, sm: 1 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <LocationOn sx={{ fontSize: { xs: 16, sm: 20 } }} />
                </Box>
                <Typography variant="body1" sx={{ 
                  color: 'grey.300', 
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}>
                  Mumbai, Maharashtra, India
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* About Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 3, 
              color: 'white',
              fontSize: { xs: '1rem', sm: '1.125rem' }
            }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ 
              color: 'grey.300', 
              lineHeight: 1.7, 
              mb: 3, 
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}>
              Founded in 2020, ShopEase has been at the forefront of digital commerce, 
              providing customers with quality products and exceptional service.
            </Typography>
            <Typography variant="body1" sx={{ 
              color: 'grey.300', 
              lineHeight: 1.7, 
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}>
              Our mission is to make premium shopping accessible to everyone with 
              competitive prices and reliable delivery.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, sm: 6 }, borderColor: 'grey.700' }} />

        {/* FAQ Section */}
        <Box sx={{ mb: { xs: 4, sm: 6 } }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 600, 
            mb: { xs: 3, sm: 4 }, 
            textAlign: 'center', 
            color: 'white',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
          }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={{ xs: 3, sm: 3 }} >
            {faqData.map((faq, index) => (
              <Grid item xs={10} md={6} key={index} sx={{width:{sm:"30%"}}}>
                <Accordion 
                  sx={{ 
                    backgroundColor: 'grey.800',
                    color: 'white',
                    borderRadius: 2,
                    '&:before': { display: 'none' },
                    '& .MuiAccordionSummary-root': {
                      color: 'white',
                      borderRadius: 2,
                      '&:hover': { 
                        backgroundColor: 'grey.700',
                        transition: 'background-color 0.2s ease-in-out'
                      }
                    },
                    '& .MuiAccordionDetails-root': {
                      backgroundColor: 'grey.800',
                      borderRadius: '0 0 8px 8px'
                    }
                  }}
                >
                  <AccordionSummary 
                    expandIcon={<ExpandMore sx={{ 
                      color: 'primary.main', 
                      fontSize: { xs: 24, sm: 28 } 
                    }} />}
                    sx={{ py: { xs: 1.5, sm: 2 } }}
                  >
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      fontSize: { xs: '1rem', sm: '1.1rem' }
                    }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ py: { xs: 2, sm: 3 } }}>
                    <Typography variant="body1" sx={{ 
                      color: 'grey.300', 
                      lineHeight: 1.7, 
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'grey.700' }} />

        {/* Bottom Footer */}
        <Box sx={{ mt: { xs: 3, sm: 4 }, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ 
            color: 'grey.400', 
            fontSize: { xs: '0.875rem', sm: '1rem' }
          }}>
            © 2025 Skill Hive Innovations. All rights reserved. | 
            <Link 
              href="#" 
              sx={{ 
                color: 'grey.400', 
                textDecoration: 'none', 
                ml: 1, 
                fontWeight: 500,
                '&:hover': { 
                  color: 'primary.main',
                  textDecoration: 'underline'
                },
                transition: 'color 0.2s ease-in-out'
              }}
            >
              Privacy Policy
            </Link> | 
            <Link 
              href="#"
              sx={{ 
                color: 'grey.400', 
                textDecoration: 'none', 
                ml: 1, 
                fontWeight: 500,
                '&:hover': { 
                  color: 'primary.main',
                  textDecoration: 'underline'
                },
                transition: 'color 0.2s ease-in-out'
              }}
            >
              Terms of Service
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
