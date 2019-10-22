// load sales orders for a customer through scheduled script

function loadItemNamesFromSalesOrder(type) {
    var loadSearch = nlapiLoadSearch('salesorder', 1023);
    var searchResults = loadSearch.runSearch();
    res = [];
    searchResults.forEachResult(function (s) {
        res.push(s.getId());
        return true;
    });
    res.forEach(function (orderId) {
        var salesOrder = nlapiLoadRecord('salesOrder', orderId);
        for (var i = 1; i < salesOrder.getLineItemCount('item'); i++) {
            nlapiLogExecution('DEBUG', 'Items ordered', "item name: " + salesOrder.getLineItemValue('item', 'item', i) + " sales order id:" + orderId);
        }
    });
}
