function adjustInventory() {
    var inventoryItem = new $R({
        nlobjRecordType: "inventoryadjustment",
        nlobjFieldIds: {
            subsidiary:3,
            account:60,
            postingperiod:270,
          celigo_write_log: true
        },
        nlobjSublistIds: {
            inventory: [{
                item: 1136,
                adjustqtyby: 10,
                location:6
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