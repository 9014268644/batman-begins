var maxDrops = 100;


function preload(){
    
}

function setup(){
   
    
}

function draw(){
    
}   

function push(){
    for(var i=0; i<maxDrops; i++){
        maxDrops.push(new createDrop(random(0,400),random(0,400)));
    }
}