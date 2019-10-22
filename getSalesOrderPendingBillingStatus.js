// Create a standard NetSuite record
function getSalesOrderPendingBillingStatusDetails(inputData)
{
    if(inputData.email){
        nlapiLogExecution('DEBUG','email id','email_id='+inputData.email);
        var searchFilters=[["type","anyof","SalesOrd"],"AND",["customermain.email","is","dinesh.valuvalu@celigo.com"],"AND",["mainline","is","T"]];
        var col=[];
        col[0]=new nlobjSearchColumn('amount');
        col[1]=new nlobjSearchColumn('tranid');
        var search=nlapiCreateSearch('salesorder',searchFilters,col);
        var searchResults=search.runSearch();
        var res=[];
        searchResults.forEachResult(function(result){res.push(obj={"orderId":result.getValue("tranid"),"amount":result.getValue("amount")});return true;});
        return res;
    }
}

//Authorization: NLAuth nlauth_account=TSTDRV1265333, nlauth_email=dinesh.valuvalu@celigo.com, nlauth_signature=dinesh@1994


