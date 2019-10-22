function createRecords(){
    // try {
         for(var i=0;i<1000;i++){
             var obj=nlapiCreateRecord('customrecord_customrecordwithpartialsale',677);
             obj.setFieldValue('custrecord_salesorderid',i);
             obj.setFieldValue('name','salesORDER_'+1);
             nlapiSubmitRecord(obj);
             if(i%500==0){
                 nlapiLogExecution("DEBUG","Number of record created is:",i);
                 setRecoveryPoint();
             }
         }
     //} catch (error) {
       //  nlapiLogExecution("DEBUG","error is",error);
         // 
         
    // }
 
 }
 function setRecoveryPoint()
{
 var state = nlapiSetRecoveryPoint(); //100 point governance
 if( state.status == 'SUCCESS' ) return; //we successfully create a new recovery point
 if( state.status == 'RESUME' ) //a recovery point was previously set, we are resuming due to some unforeseen error
 {
 nlapiLogExecution("ERROR", "Resuming script because of " + state.reason+". Size = "+ state.size);
 handleScriptRecovery();
 }
 else if ( state.status == 'FAILURE' ) //we failed to create a new recovery point
 {
 nlapiLogExecution("ERROR","Failed to create recovery point. Reason = "+state.reason + " /Size = "+ state.size);
 handleRecoveryFailure(state);
 }
}

function checkGovernance(){
    var context = nlapiGetContext();
    if( context.getRemainingUsage() < myGovernanceThreshold )
    {
    var state = nlapiYieldScript();
    if( state.status == 'FAILURE')
    {
    nlapiLogExecution("ERROR","Failed to yield script, exiting: Reason = "+state.reason + " /Size = "+ state.size);
    throw "Failed to yield script";
    }
    else if ( state.status == 'RESUME' )
    {
    nlapiLogExecution("AUDIT", "Resuming script because of " + state.reason+". Size = "+ state.
   size);
    }
    // state.status will never be SUCCESS because a success would imply a yield has occurred. The equivalent response would be yield
    }
   }
   function handleRecoverFailure(failure)
   {
    if( failure.reason == 'SS_MAJOR_RELEASE' ) throw "Major Update of NetSuite in progress, shutting down all processes";
    if( failure.reason == 'SS_CANCELLED' ) throw "Script Cancelled due to UI interaction";
    if( failure.reason == 'SS_EXCESSIVE_MEMORY_FOOTPRINT' ) { cleanUpMemory(); setRecoveryPoint();
   }//avoid infinite loop
    if( failure.reason == 'SS_DISALLOWED_OBJECT_REFERENCE' ) throw "Could not set recovery point because of a reference to a non-recoverable object: "+ failure.information;
   }
