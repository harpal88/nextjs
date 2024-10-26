import { Box, Button, Grid, TextField, Typography, Divider, ThemeProvider, createTheme, InputAdornment, IconButton } from '@mui/material';
import { Facebook, Apple, Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import AttachFile from '@mui/icons-material/AttachFile';
import Send from '@mui/icons-material/Send';
import Image from 'next/image';

const theme = createTheme({
  typography: {
    fontFamily: 'Urbanist, Arial, sans-serif',
  },
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Add the Urbanist font dynamically
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container height="100vh" display="flex" flexDirection="row" justifyContent="center">
        {/* Left Section: Login Form */}
        <Grid
          item
          xs={12} md={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ padding: '64px 8px' }}
        >
          <Box width="100%" maxWidth={360}  display="flex" flexDirection="column" >
            <Typography variant="h5" align="center" gutterBottom>
              Sign in to your account
            </Typography>

            <TextField fullWidth label="Phone number or email" margin="normal" />
            <TextField
  fullWidth
  label="Password"
  type={showPassword ? 'text' : 'password'}
  margin="normal"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibility}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
<Box display="flex" justifyContent="flex-end" width="100%">
  <Button 
    sx={{ textAlign: 'right', mt: -1 }} // Removed fullWidth here
  >
    Forgot password?
  </Button>
</Box>



            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, borderRadius: 3, height: 50 }}
            >
              Sign in
            </Button>

            <Box border="1px solid #ccc" borderRadius={2} p={2} mt={2} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
  <input type="checkbox" id="captcha" style={{ transform: 'scale(1.5)', marginLeft: 8 }} />
  <Typography variant="body2" component="label" htmlFor="captcha" sx={{ fontWeight: 400, ml: 1 }}>
    I am human
  </Typography>
</Box>

              <Box display="flex" flexDirection="column" alignItems="center">
              <Image 
  src="https://www.cdnlogo.com/logos/h/4/hcaptcha.svg" 
  alt="Captcha" 
  width={30} 
  height={30} 
  style={{ marginRight: 8 }} 
/>

                <Typography variant="caption" color="textSecondary">
                  Privacy - Terms
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }}>Or</Divider>

            <Button 
              startIcon={<Apple style={{ color: '#000' }} />} 
              fullWidth 
              sx={{ 
                mb: 1, 
                backgroundColor: '#e0f7fa', 
                color: '#000', 
                borderRadius: 3, 
                padding: '10px 16px', 
                justifyContent: 'center', 
                display: 'flex' 
              }} 
            >
              Sign in with Apple ID
            </Button>

            <Button 
              startIcon={<Google style={{ color: '#000' }} />} 
              fullWidth 
              sx={{ 
                mb: 1, 
                backgroundColor: '#e0f7fa', 
                color: '#000', 
                borderRadius: 3, 
                padding: '10px 16px', 
                justifyContent: 'center', 
                display: 'flex' 
              }} 
            >
              Sign in with Google
            </Button>

            <Button 
              startIcon={<Facebook style={{ color: '#000' }} />} 
              fullWidth 
              sx={{ 
                backgroundColor: '#e0f7fa', 
                color: '#000', 
                borderRadius: 3, 
                padding: '10px 16px', 
                justifyContent: 'center', 
                display: 'flex' 
              }} 
            >
              Sign in with Facebook
            </Button>

            <Box mt={3} textAlign="center">
              <Typography variant="body2">
                Don't you have an account? <Button>Sign up</Button>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section: Information Text */}
        <Grid item xs={12} md={7} display="flex" alignItems="center" justifyContent="space-around" sx={{ width: '100%', maxHeight: '100vh', flexDirection: 'column' }}>
          <Box 
            width="100%" 
            maxWidth="100%"  
            m={4} 
            border="1px solid #ccc" 
            borderRadius={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{ overflow: 'auto', height: '100%' }} 
          >
            {/* Top Section with Logo and Title */}
            <Box display="flex" flexDirection="column">
              {/* Row for Text and Logo */}
              <Box display="flex" alignItems="center" justifyContent="space-between" ml={4} mr={4} mt={1} mb={1}>
                <Typography variant="h6">Welcome back</Typography>
                <Image 
                  src="https://assets.coingecko.com/coins/images/3687/large/ocean-protocol-logo.jpg?1696504363" 
                  alt="Ocean Protocol Logo" 
                  style={{ width: 50, height: 50 }} 
                />
              </Box>

              {/* Divider in a new row */}
              <Divider sx={{ my: 0.5 }} />
            </Box>

            {/* Description Box */}
            <Box m={4} p={2} bgcolor="#f5f5f5" borderRadius={2} maxWidth="70%">
              <Typography variant="body1">
                Information for your AI assistant: ex. AI personal assistants are advanced software
                programs that use artificial intelligence to perform daily personal tasks. They can
                operate as AI-powered text assistants, voice bots, or a combination of both.
              </Typography>
            </Box>

            {/* Input Area */}
            <Box ml={4} mr={4} mt={2} mb={2} border="1px solid #ccc" borderRadius={2}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                  <Button startIcon={<AttachFile />} />
                  <TextField 
                    fullWidth 
                    placeholder="Ask me anything..." 
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none', 
                        },
                        '&:hover fieldset': {
                          border: 'none', 
                        },
                        '&.Mui-focused fieldset': {
                          border: 'none', 
                        },
                      },
                    }}
                  />
                </Box>
                <Button startIcon={<Send />} sx={{ ml: 1 }} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
