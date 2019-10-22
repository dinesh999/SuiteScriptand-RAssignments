var obj = nlapiCreateRecord('inventoryadjustment', {recordmode:'dynamic'});

obj.setFieldValue('subsidiary',3); // setting subsidiary to Honeycomb Holdings Inc.

obj.setFieldValue('account',110); // setting account

obj.selectNewLineItem('inventory');

obj.setCurrentLineItemValue('inventory', 'item', 1129);

obj.setCurrentLineItemValue('inventory', 'location', 6);


obj.setCurrentLineItemValue('inventory', 'adjustqtyby', 1);

obj.commitLineItem('inventory');

var id = nlapiSubmitRecord(obj);

nlapiLogExecution('DEBUG','inventory adjustment id',id);


