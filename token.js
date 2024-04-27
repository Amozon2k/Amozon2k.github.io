document.getElementById('tokenna').addEventListener("click",async ()=>{
    document.getElementById('tokenn').value=await messaging.getToken();

});