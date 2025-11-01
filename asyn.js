const loadData=()=>{
    console.log(1);
    console.log(2);

    setTimeout(()=> {
        console.log('Its time out')
    },1000)

    const num=10+10;
    console.log(num);
    console.log("At last");
}
loadData();