//userEventBeforeSalesOrderSubmit

function userEventBeforeSalesOrderSubmit(type)
{
    if (type == 'create')
    {
        var salesorder = nlapiGetNewRecord();
        nlapiLogExecution('DEBUG', 'type argument', 'type is create');
		//setting search filters
        var searchFilters=new Array();
        searchFilters[0] = new nlobjSearchFilter('custrecord_salesorderid', null, 'is', salesorder.getFieldValue('tranid'));
      //setting the required columns
        var col = new Array();
        col[0] = new nlobjSearchColumn('custrecord_salesorderid');
        var results = nlapiSearchRecord('customrecord_customrecordwithpartialsale', null, searchFilters, col);
        if(results == null){
            var customRecord = nlapiCreateRecord("customrecord_customrecordwithpartialsale");
            customRecord.setFieldValue('custrecord_salesorderid',salesorder.getFieldValue('tranid'));
            customRecord.setFieldValue('custrecord_customername',salesorder.getFieldText('entity'));
            customRecord.setFieldValue('name','salesorder_'+salesorder.getFieldValue('tranid'));
            nlapiSubmitRecord(customRecord);
        }
    }
}

function userEventAfterSalesOrderSubmit(type)
{
    var salesorder = nlapiGetNewRecord();
    if (type == 'create')
    {
      nlapiLogExecution('DEBUG', 'type argument', 'type is create after submit');
      var record=nlapiLoadRecord('customer',salesorder.getFieldValue('entity'));
      var  authorInternalId=22224;
      var recipient=record.getFieldText('email');
      var subject="Order is created";
      var body="Congratulations ! your order is created";
      var attachments = nlapiPrintRecord('TRANSACTION', salesorder.getId(), 'PDF', null);
      //nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo);
      nlapiSendEmail(authorInternalId, recipient, subject, body, null, null, null, attachments);


    }
}