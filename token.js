document.getElementById('tokenna').addEventListener("click",async ()=>{
    document.getElementById('tokenn').innerText=await messaging.getToken();;
});
