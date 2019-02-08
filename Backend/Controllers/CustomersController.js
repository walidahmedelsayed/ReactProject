require('../Models/Customer')
var mongoose = require('mongoose');
Customer = mongoose.model('Customer');

exports.listCustomers = function (req, res) {
    Customer.find({}, function (err, customers) {
        if (err)
            res.send(err);
        res.json(customers);
    });
};

exports.addCustomer = function (req, res) {
    console.log(req.body);
    var newCustomer = new Customer(req.body);
    newCustomer.save(function (err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });
};


exports.getCustomer = function (req, res) {
    Customer.findById(req.params.customerId, function (err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });
};


exports.updateCustomer = function (req, res) {
    Customer.findOneAndUpdate({ _id: req.params.customerId }, req.body, { new: true }, function (err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });
};


exports.deleteCustomer = function (req, res) {
    Customer.findOneAndDelete({
        _id: req.params.customerId
    }, function (err, customer) {
        if (err)
            res.send(err);
        res.json({ message: 'Customer successfully deleted' });
    });
};

