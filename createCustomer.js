var newCustomer=nlapiCreateRecord('customer');
newCustomer.getFieldValue('isperson');
newCustomer.setFieldValue('companyname','testingCustomerFromSuiteScriptCompanyType');
newCustomer.setFieldValue('subsidiary',3);
var id=nlapiSubmitRecord(newCustomer);
nlapiLogExecution('DEBUG','customer id',id);