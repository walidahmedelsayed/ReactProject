module.exports = function (app) {

    var CustromersController = require("../Controllers/CustomersController");

    app.route('/customers')
        .get(CustromersController.listCustomers)
        .post(CustromersController.addCustomer);


    app.route('/customers/:customerId')
        .get(CustromersController.getCustomer)
        .put(CustromersController.updateCustomer)
        .delete(CustromersController.deleteCustomer);
};