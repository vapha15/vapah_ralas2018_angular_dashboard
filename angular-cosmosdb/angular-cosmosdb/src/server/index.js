const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const routesRevnue = require('./api/revenue/revenue-routes');
const routesLine = require('./api/line/lines-routes');
const root = './';
const port = process.env.PORT || '3000';
const app = express();

var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist/angular-cosmosdb')));
app.use('/api', routes);
app.use("/api", routesRevnue);
app.use("/api", routesLine);
app.get('*', (req, res) => {
  res.sendFile('dist/angular-cosmosdb/index.html', {root});
});

app.listen(port, () => console.log(`API running on localhost:${port}`));