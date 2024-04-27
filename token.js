document.getElementById('tokenna').addEventListener("onclick",async ()=>{
    document.getElementById('tokenn').innerText=await messaging.getToken();;
});
