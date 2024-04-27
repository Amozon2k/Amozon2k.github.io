// document.getElementById('tokenna').addEventListener("click",async ()=>{
//     document.getElementById('tokenn').innerText=await messaging.getToken();;
// });
// 
document.getElementById('tokenna').addEventListener("click", async () => {
    try {
        const token = await messaging.getToken();
        document.getElementById('tokenn').innerText = token;
    } catch (error) {
        console.error('Ошибка при получении токена:', error);
    }
});