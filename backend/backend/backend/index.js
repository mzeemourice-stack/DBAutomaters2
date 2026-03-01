const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Dbautomaters backend is live!');
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
