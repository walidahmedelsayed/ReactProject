express = require('express');
mongoose = require('mongoose');
app = express();
PORT = 8090
var routes = require('./Routes/CustomerRoutes');
bodyParser = require('body-parser');
cors = require('cors');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/reactCustomers', { useNewUrlParser: true });
app.use(cors());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.listen(PORT);