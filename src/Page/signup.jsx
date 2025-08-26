import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  InputAdornment,
  IconButton,
  TextareaAutosize,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import {
  Person,
  Email,
  Phone,
  Lock,
  Visibility,
  VisibilityOff,
  Home,
} from "@mui/icons-material";

function SignUpCard() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setForm((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add your submission logic here
  };

  const steps = ['Personal Info', 'Security', 'Address'];

  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(107deg, #f5f7fa 0%, #c3cfe2 100%)',
          py: 4
        }}
      >
        <Card 
          sx={{ 
            width: '100%',
            borderRadius: 4,
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 50px rgba(0,0,0,0.15)'
            }
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 4
              }}
            >
              <Typography 
                variant="h3" 
                align="center" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Create Account
              </Typography>
              <Typography 
                variant="subtitle1" 
                align="center" 
                sx={{ 
                  color: 'text.secondary',
                  maxWidth: '80%',
                  mb: 3
                }}
              >
                Join our community and start shopping with ease
              </Typography>
            </Box>

            <Stepper 
              activeStep={step - 1} 
              alternativeLabel 
              sx={{ 
                mb: 5,
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'success.main',
                },
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'primary.main',
                },
                '& .MuiStepConnector-line': {
                  borderColor: 'rgba(0, 0, 0, 0.08)'
                }
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{
                '& .MuiTextField-root': {
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }
              }}
            >
              {step === 1 && (
                <Grid container spacing={5} sx={{display:"flex", justifyContent:"center"}}>
                  <Grid item xs={10} md={9}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Full Name"
                      value={form.name}
                      sx={{minWidth: '40vh'}}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      label="Email Address"
                      value={form.email}
                      sx={{minWidth: '40vh'}}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </Grid>
                </Grid>
              )}

              {step === 2 && (
                <Grid container spacing={2} sx={{display:"flex", justifyContent:"center"}}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="password"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      value={form.password}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock color="primary" />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="phone"
                      label="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </Grid>
                </Grid>
              )}

              {step === 3 && (
                <Grid container spacing={2} sx={{display:"flex", justifyContent:"center"}}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="address.street"
                      label="Street Address"
                      value={form.address.street}
                      onChange={handleChange}
                      multiline
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Home color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="address.city"
                      label="City"
                      value={form.address.city}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="address.state"
                      label="State"
                      value={form.address.state}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="address.zipCode"
                      label="ZIP Code"
                      value={form.address.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="address.country"
                      label="Country"
                      value={form.address.country}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                </Grid>
              )}

              <Box 
                sx={{ 
                  mt: 5,
                  display: 'flex', 
                  justifyContent: 'space-between',
                  gap: 2
                }}
              >
                {step > 1 && (
                  <Button
                    variant="outlined"
                    onClick={prevStep}
                    sx={{ 
                      minWidth: 120,
                      borderRadius: 2,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        background: 'rgba(0, 0, 0, 0.04)'
                      }
                    }}
                  >
                    Back
                  </Button>
                )}
                <Box sx={{ flex: '1 1 auto' }} />
                {step < 3 ? (
                  <Button
                    variant="contained"
                    onClick={nextStep}
                    sx={{ 
                      minWidth: 120,
                      borderRadius: 2,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      boxShadow: '0 3px 15px rgba(33, 203, 243, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(33, 203, 243, 0.4)'
                      }
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ 
                      minWidth: 120,
                      borderRadius: 2,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      boxShadow: '0 3px 15px rgba(33, 203, 243, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(33, 203, 243, 0.4)'
                      }
                    }}
                  >
                    Sign Up
                  </Button>
                )}
              </Box>
            </Box>

            <Box
              sx={{
                mt: 4,
                pt: 3,
                borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                textAlign: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                Already have an account?{' '}
                <Button
                  href="/login"
                  color="primary"
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'rgba(33, 150, 243, 0.08)'
                    }
                  }}
                >
                  Sign in
                </Button>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default SignUpCard;
