const app=require('./app');

const port = 3000; // Use port 3000 by default
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});