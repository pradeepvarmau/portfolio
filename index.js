const hi = function(x){
    x();
    console.log("anitha");
    x();
}

hi(function(){
    console.log("sai");
});
