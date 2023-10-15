const generateToken = (user) => {
    return jwt.sign({ id: user._id }, 'SecretKey12345678', { expiresIn: '1h' });
  };
  
  // Verify JWT token using middleware
  const authVerifyMiddleware = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');
  
    try {
      const verified = jwt.verify(token, 'SecretKey12345678');
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send('Invalid Token');
    }
  };
 
  
  
  
  
  
  