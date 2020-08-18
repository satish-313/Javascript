let counter = 0;
function count(){
    counter++;
    if (0 === counter % 5){
    alert(`counter is now ${counter}`);
    }
    document.querySelector('h1').innerHTML = counter;
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick = count;
})