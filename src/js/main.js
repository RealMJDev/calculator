//The Variables
var sum = document.querySelector('.calc-container-screen-sum');
var result = document.querySelector('.calc-container-screen-result');
var math = document.querySelectorAll('.math');
var equals = document.querySelector('.equal');
var clear = document.querySelector('.clear');
var del = document.querySelector('.del');
// var funk = document.querySelectorAll('.funk');

//All Mathematical values in a loop 
math.forEach(function(num){
    num.addEventListener('click', function(){
        var nr = num.innerHTML;
        sum.innerHTML += nr;    
    })
});

//The equals button
equals.addEventListener('click', function(){
    result.innerHTML = eval(sum.innerHTML);
    sum.innerHTML = '';
});

//The clear button
clear.addEventListener('click', function(){
    sum.innerHTML = '';
    result.innerHTML = 0;
    document.body.style.background
});

//The delete button
del.addEventListener('click', function(){
    var str = sum.innerHTML;
    var res = str.slice(0,-1);
    sum.innerHTML = res;
});





























//Change the colors
// funk.forEach(function(fx){
//     fx.addEventListener('click', function(){
//         var color1 = 'rgb(' + (Math.floor(Math.random() * 256)) + 
//         ',' + (Math.floor(Math.random() * 256)) + 
//         ',' + (Math.floor(Math.random() * 256)) + ')';
//         var color2 = 'rgb(' + (Math.floor(Math.random() * 256)) + 
//         ',' + (Math.floor(Math.random() * 256)) + 
//         ',' + (Math.floor(Math.random() * 256)) + ')';
//         document.body.style.backgroundImage = 
//         "-webkit-linear-gradient("+ color1 +" , "+ color2 +")";
//     })
// });
