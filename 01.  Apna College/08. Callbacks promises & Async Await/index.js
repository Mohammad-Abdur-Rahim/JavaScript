// call backHell

function getData(dataId,getNext){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNext){
            getNext();
        }
    },2000)
}
//CallBack Hell
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    });
})