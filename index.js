function receivesAFunction(callback){
    callback()
};
function returnsANamedFunction(){
    return function namedFunction(par="before all"){
        console.log(par);
    }
};
function returnsAnAnonymousFunction(){
    return function(){
        console.log("something");
    };
};