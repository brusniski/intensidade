function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  
  fill ("rgb(111,11,89)");
  textSize(70);
  textAlign (CENTER,CENTER)
  textFont('georgia');
   
  let maximo=width;
  let minimo=0;
  console.log("Intensidade".length);
  let palavra="Intensidade";
  let quantidade=map(mouseX,0,width,1,palavra.length)
  let parcial=palavra.substring(0,quantidade);
  text(parcial,200,200)
}