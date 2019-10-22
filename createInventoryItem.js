var record=nlapiCreateRecord('inventoryitem');

record.setFieldValue('itemid','testingInventoryItemThroughSuiteScript3');

var id = nlapiSubmitRecord(record, true);

nlapiLogExecution('DEBUG','Inventory record',JSON.stringify(record));

nlapiLogExecution('DEBUG','Inventory item id',record.getFieldValue('itemid'));