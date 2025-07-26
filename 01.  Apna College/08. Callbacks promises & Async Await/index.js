// Async Function Always Return Promise--------------------------
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 2000);
    });
}
async function getWeather() {
    await api();
}