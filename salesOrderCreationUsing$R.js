function createSalesOrder() {
    var salesOrder = new $R({
        nlobjRecordType: "inventoryadjustment",
        nlobjFieldIds: {
            subsidiary:3,
            entity:23457
        },
        nlobjSublistIds: {
            item: [{
                item: 1136,
                quantity: 10,
                amount:556
            }]
        },
        submitRecordOptions: {
            doSourcing: true,
            ignoreMandatoryFields: true,
            reloadAfterSubmit: true
        }
    });
    var recordId = inventoryItem.save();
    $$.logExecution("DEBUG", "Inventory item inventory adjusted", recordId);
}