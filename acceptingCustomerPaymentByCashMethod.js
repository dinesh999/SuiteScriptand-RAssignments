function transformInvoiceToRMA() {
    var transformRecord = new $R({
        nlobjRecordType: "returnauthorization",
        nlobjFieldIds: {
            celigo_nlobjTransformId:15298,
            celigo_nlobjTransformType:'invoice',
            celigo_write_log:true
        },
        submitRecordOptions: {
            doSourcing: true,
            ignoreMandatoryFields: true,
            reloadAfterSubmit: true
        }
    });
    var recordId = transformRecord.save();
    $$.logExecution("DEBUG", "Cash Sale Created", recordId);
}