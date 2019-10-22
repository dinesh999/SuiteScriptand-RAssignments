//userEventBeforeSalesOrderSubmit

function userEventBeforeSalesOrderSubmit(type)
{   
    if (type == 'create')
    {
      nlapiLogExecution('DEBUG', 'type argument', 'type is create');
    }
}