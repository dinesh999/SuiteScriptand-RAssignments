var invoice=nlapiTransformRecord('salesorder',id,'invoice');
var invoiceId = nlapiSubmitRecord(invoice, true);
