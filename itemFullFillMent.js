var itemFulfillment = nlapiTransformRecord('salesorder', id, 'itemfulfillment');
itemFulfillment.setLineItemValue('item','location',1,6);
var fulfillmentId = nlapiSubmitRecord(itemFulfillment, true);