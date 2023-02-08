const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const curr_date = new Date();
  console.log('API hit at:', curr_date);
  setTimeout(() => {
    res.send({
      message: 'API processed after 10 seconds'
    });
  }, 10000);
  console.log('Request Complete at:', new Date());
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
