if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}

function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('#counterid').innerHTML = counter;
    localStorage.setItem('counter',counter);
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#counterid').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
})