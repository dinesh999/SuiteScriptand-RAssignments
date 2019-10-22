var creditmemo=nlapiTransformRecord(nlapiGetRecordType(),nlapiGetRecordId(),'creditmemo');
creditmemo.setFieldValue('location',6);
var creditmemoId=nlapiSubmitRecord(creditmemo);
