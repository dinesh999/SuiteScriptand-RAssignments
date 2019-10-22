function transformSalesOrderToCashsale() {
    var transformRecord = new $R({
        nlobjRecordType: "invoice",
        nlobjFieldIds: {
            celigo_nlobjTransformId:15294,
            celigo_nlobjTransformType:'salesorder',
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