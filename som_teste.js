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
  
sound = loadSound('https://raw.githubusercontent.com/fabiojavaroni/som/master/doorbell.mp3');

//Sprite - Fantasma
  fantasma = createSprite();
  fantasma.addAnimation('normal', 'https://raw.githubusercontent.com/fabiojavaroni/imagens/master/fantasma-1.png', 'https://raw.githubusercontent.com/fabiojavaroni/imagens/master/fantasma-7.png');

  fantasma2 = createSprite();
  fantasma2.addAnimation('normal', 'https://raw.githubusercontent.com/fabiojavaroni/imagens/master/fantasma-andando-1.png', 'https://raw.githubusercontent.com/fabiojavaroni/imagens/master/fantasma-andando-4.png');

  fantasma3img1 = PegaImagem('fantasma-rodando-1');
  fantasma3img2 = PegaImagem('fantasma-rodando-3');
  fantasma3 = createSprite();
  fantasma3.addAnimation('normal', fantasma3img1, fantasma3img2);

}
 

function fundo(nome){
    createCanvas(500, 500);
    background(nome);
  }


function personagem(nome){
  drawSprite(nome);
}