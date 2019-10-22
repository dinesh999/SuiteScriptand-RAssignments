function transformSalesOrderToItem() {
    var transformRecord = new $R({
        nlobjRecordType: "itemfulfillment",
        nlobjFieldIds: {
            celigo_nlobjTransformId:15288,
            celigo_nlobjTransformType:'salesorder',
            celigo_write_log:true
        },
        nlobjSublistIds: {
            item: [{
                linenum:1,
                location: 6
            }]
        },
        submitRecordOptions: {
            doSourcing: true,
            ignoreMandatoryFields: true,
            reloadAfterSubmit: true
        }
    });
    var recordId = transformRecord.save();
    $$.logExecution("DEBUG", "Inventory item inventory adjusted", recordId);
}