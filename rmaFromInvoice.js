var rmaFromInvoice=nlapiTransformRecord(nlapiGetRecordType(),nlapiGetRecordId(),'returnauthorization');
var rmaFromInvoiceId=nlapiSubmitRecord(rmaFromInvoice);
