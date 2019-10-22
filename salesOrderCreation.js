var salesOrder=nlapiCreateRecord('salesorder');
salesOrder.setFieldValue('entity',22955);
salesOrder.selectNewLineItem('item');
salesOrder.setCurrentLineItemValue('item','item',1129);
salesOrder.setCurrentLineItemValue('item','quantity',1);
salesOrder.setCurrentLineItemValue('item','amount',112);
salesOrder.commitLineItem('item');
var id = nlapiSubmitRecord(salesOrder);

