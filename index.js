const on = document.getElementById('on');
const off = document.getElementById('off');
const img = document.getElementById('img');

function isBroken(){
    return img.src.indexOf ( 'break' ) > -1
}

function lampOn(){
    if(!isBroken()){
         img.src = './img/on.jpg';
    }
}

function lampOff(){
    if(!isBroken()){
         img.src = './img/off.jpg';
    }
}

function broken(){
    img.src = './img/break.jpg';
}

on.addEventListener('click', lampOn);
off.addEventListener('click', lampOff);
img.addEventListener('mouseover', lampOn);
img.addEventListener('mouseout', lampOff);
img.addEventListener('dblclick', broken);