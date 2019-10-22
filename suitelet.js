function createOrderForACustomer() {

    // creating the inventory item
    var inventoryItem = nlapiCreateRecord('inventoryitem');

    inventoryItem.setFieldValue('itemid', 'testingInventoryItemThroughSuiteScript4');

    inventoryItem.setFieldValue('costingmethod', 'AVERAGE');

    var itemId = nlapiSubmitRecord(inventoryItem);

    nlapiLogExecution('DEBUG', 'item id', itemId);

    // adjusting the inventory for the inventory item
    var inventoryItemAdjustment = nlapiCreateRecord('inventoryadjustment', {
        recordmode: 'dynamic'
    });

    inventoryItemAdjustment.setFieldValue('subsidiary', 3); // setting subsidiary to Honeycomb Holdings Inc.

    inventoryItemAdjustment.setFieldValue('account', 110); // setting account

    inventoryItemAdjustment.selectNewLineItem('inventory');

    inventoryItemAdjustment.setCurrentLineItemValue('inventory', 'item', itemId);

    inventoryItemAdjustment.setCurrentLineItemValue('inventory', 'location', 6);

    inventoryItemAdjustment.setCurrentLineItemValue('inventory', 'adjustqtyby', 1);

    inventoryItemAdjustment.commitLineItem('inventory');

    var inventoryItemAdjustmentId = nlapiSubmitRecord(inventoryItemAdjustment);

    nlapiLogExecution('DEBUG', 'inventory item id', inventoryItemAdjustmentId);



    // creating customer 
    var newCustomer = nlapiCreateRecord('customer');
    newCustomer.setFieldValue('companyname', 'testingCustomerFromSuiteScriptCompanyType1');
    newCustomer.setFieldValue('subsidiary', 3);
    var customerId = nlapiSubmitRecord(newCustomer);
    nlapiLogExecution('DEBUG', 'customer id', customerId);


    // generating sales order for the given customer
    var salesOrder = nlapiCreateRecord('salesorder');
    salesOrder.setFieldValue('entity', customerId);
    salesOrder.selectNewLineItem('item');
    salesOrder.setCurrentLineItemValue('item', 'item', itemId);
    salesOrder.setCurrentLineItemValue('item', 'quantity', 1);
    salesOrder.setCurrentLineItemValue('item', 'amount', 1120);
    salesOrder.commitLineItem('item');
    var salesOrderId = nlapiSubmitRecord(salesOrder);
    nlapiLogExecution('DEBUG', 'sales order id', salesOrderId);

    // item fullfillment
    var itemFulfillment = nlapiTransformRecord('salesorder', salesOrderId, 'itemfulfillment');
    itemFulfillment.setLineItemValue('item', 'location', 1, 6);
    var fulfillmentId = nlapiSubmitRecord(itemFulfillment);
    nlapiLogExecution('DEBUG', 'item fulfillment id', fulfillmentId);

    //invoice generation
    var invoice = nlapiTransformRecord('salesorder', salesOrderId, 'invoice');
    var invoiceId = nlapiSubmitRecord(invoice);
    nlapiLogExecution('DEBUG', 'invoice id', invoice);

    var cashSaleRecord = nlapiTransformRecord('salesorder', salesOrderId, 'cashsale');
    var cashSaleRecordId = nlapiSubmitRecord(cashSaleRecord);
    nlapiLogExecution('DEBUG', 'invoice id', invoice);


}
