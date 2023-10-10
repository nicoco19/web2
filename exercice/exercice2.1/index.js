 
function addDateTime(message){
    const dateTimeNow = new Date();
    return alert(dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString() + " \n" + message); 
}
        
addDateTime( "test" );