function createInventoryItem() {
    var inventoryItem = new $R({
        nlobjRecordType: "inventoryitem",
        nlobjFieldIds: {
            itemid: "testingInventoryItemFrom$R",
            costingmethod: "AVG"
        },
        submitRecordOptions: {
            doSourcing: true,
            ignoreMandatoryFields: true,
            reloadAfterSubmit: true
        }
    });
    var recordId = inventoryItem.save();
    $$.logExecution("DEBUG", "Inventory Item Created", recordId);
}

