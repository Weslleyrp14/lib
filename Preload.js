function preload(){
espacial1 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-1.png');      

espacial2 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-2.png');      

espacial3 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-3.png');      

espacial4 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-4.png');      

espacial5 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-5.png');      

espacial6 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-6.png');    

espacial7 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-7.png');  
 
espacial8 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-8.png');    

espacial9 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-9.png'); 
 
espacial10 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/espa%C3%A7o-10.png'); 
 
fimEspacial = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/fim_espaço.png');    
 
nave1= loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/nave_espacial_1.png'); 
 
nave2 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/fundo/master/nave_espacial_2.png'); 

selva = loadImage('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/selva.png');

aniversario = loadImage('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/aniversario.png');

aniversarioCorte = loadImage('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/aniversarioCorte.png');

pistaDeCorrida = loadImage('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/pista.png');

pistaDeCorrida2 = loadImage('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/pista2.png');
  
fantasma3.addAnimation('normal', fantasma3img1, fantasma3img2);

}
 

function fundo(nome){
  background(nome);
  drawSprites();  
}