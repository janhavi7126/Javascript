function fun(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = true;
            if(!error){
                console.log('resolve');
                resolve();//then
            }else{
                reject('sorry');///catch
            }
        },2000);
    })
}

fun().then(function(){
    console.log('happy');
}).catch(function(e){
    console.log('not happy '+ e );
});