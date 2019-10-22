function createCustomer() {
    var customer = new $R({
        nlobjRecordType: "customer",
        nlobjFieldIds: {
            isperson: true,
            firstname:"testinguserFromRScript",
            subsidiary: 3
        },
        submitRecordOptions: {
            doSourcing: true,
            ignoreMandatoryFields: true,
            reloadAfterSubmit: true
        }
    });
    var customerId = customer.save();
    $$.logExecution("DEBUG", "Customer Created", customerId);
}