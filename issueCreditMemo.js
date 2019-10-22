function transformSalesOrderToItem() {
    var transformRecord = new $R({
        nlobjRecordType: "creditmemo",
        nlobjFieldIds: {
            celigo_nlobjTransformId:15299,
            celigo_nlobjTransformType:'returnauthorization',
            celigo_write_log:true,
          location:6
        },
        nlobjSublistIds: {
            item: [{
                item: 1136,
                quantity: 10,
              amount:550,
              location:6
            }]
        },
        submitRecordOptions: {
            doSourcing: true,
            ignoreMandatoryFields: true,
            reloadAfterSubmit: true
        }
    });
    var recordId = transformRecord.save();
    $$.logExecution("DEBUG", "creditmemeo issued", recordId);
}