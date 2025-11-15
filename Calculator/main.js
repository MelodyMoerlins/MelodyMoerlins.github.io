const output = document.getElementById('answer_number');

function updatedisplay(i)
{
    if (output.textContent.length <= 10){
    output.innerHTML += i;
    }
}

function enter(){
    output.innerHTML = eval(output.textContent)
}

function clearanswer(){
    output.innerHTML = ""
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker registered'))
    .catch((err) => console.log('Service Worker registration failed:', err));
}
