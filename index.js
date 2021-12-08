const express = require('express');
const config = require('./config/config');

const app = express();
require('./config/express')(app);

// 'layout' determines if HB will use default 'layout fl' or not as in this case
app.get('/', (req, res) => {
    res.render('home', {layout: false});
});

app.listen(config.PORT,() => console.log(`Server is running on port ${config.PORT}`));





















