
// Função que busca as imagens no github apenas pelo nome
function PegaImagem(a){
  return 'https://raw.githubusercontent.com/fabiojavaroni/imagens/master/'+a+'.png';
}


// Função para arrastar o Sprite
function arrastar(nome) {
  nome.position.x = mouseX;
  nome.position.y = mouseY;
}

// Tradução das funções
function criaCanvas(){
        createCanvas(550,550);
}
function naoRepetir(){
      	noLoop();
}
function tamanhoLinha(){
        strokeWeight(2);
}

function elipse(...args) {
	return ellipse(...args);
}

function retangulo(...args) {
	return rect(...args);
}
function circulo(...args) {
	return circle(...args);
}
function quadrado(...args) {
	return square(...args);
}
function triangulo(...args) {
	return triangle(...args);
}
function arco(...args) {
	return arc(...args);
}

function corDeFundo(cor){
  	background(cor);
}
function sorteiaNumero() {

	if (arguments.length == 1) {
		return floor( random(arguments[0] + 1) );
	}
	else if (arguments.length == 2) {
		return floor( random(arguments[0], arguments[1] + 1) );
	}
}

function carregaAnimacao(...args){
  return loadAnimation(...args);
}
function animacao(...args){
  return animation(...args);
}
function configura(...args){
  return setup(...args);
}
function mudaFrame(...args){
  return changeFrame (...args);
}
function clona(...args){
  return clone(...args);
}
function desenhar(...args){
  return draw(...args);
}
function pegaFrame(...args){
  return getFrame(...args);
}
function pegaFrameImagem(...args){
  return getFrameImage(...args);
}
function pegaAltura(...args){
  return getHeight(...args);
}
function pegaImagemEm(...args){
  return getImageAt(...args);
}
function pegaUltimoFrame(...args){
  return getLastFrame(...args);
}
function pegaLargura(...args){
  return getWidth(...args);
}
function vaParaFrame(...args){
  return goToFrame(...args);
}
function proximoFrame(...args){
  return nextFrame(...args);
}
function frameAnterior(...args){
  return previousFrame(...args);
}
function recomecar(...args){
  return rewind(...args);
}
function parar(...args){
  return stop(...args);
}
function criaSprite(...args){
  return createSprite(...args);
}
function desenhaSprite(...args){
  return drawSprite(...args);
}
function desenhaSprites(...args){
  return drawSprites(...args);
}
function pegaSprites(...args){
  return getSprites(...args);
}
function teclaApertada(...args){
  return keyDown(...args);
}
function tecladFoiApertada(...args){
  return keyWentDown(...args);
}
function teclaFoiSolta(...args){
  return keyWentUp(...args);
}
function carregaListaSprites(...args){
  return loadSpriteSheet(...args);
}
function apertouBotaoMouse(...args){
  return mouseDown(...args);
}
function soltouBotaoMouse(...args){
  return mouseUp(...args);
}
function mouseFoiApertado(...args){
  return mouseWentDown(...args);
}
function mouseFoiSolto(...args){
  return mouseWentUp(...args);
}
function atualizaSprites(...args){
  return updateSprites (...args);
}
function adicionaAnimacao(...args){
  return addAnimation(...args);
}
function adicionaImagem(...args){
  return addImage(...args);
}
function adicionaVelocidade(...args){
  return addSpeed(...args);
}
function adicionaAoGrupo(...args){
  return addToGroup(...args);
}
function pontoDeAtracao(...args){
  return attractionPoint(...args);
}
function pulo(...args){
  return bounce(...args);
}
function mudaAnimacao(...args){
  return changeAnimation(...args);
}
function mudaImagem(...args){
  return changeImage(...args);
}

function cor(...args){
  return fill(...args);
}

function tamanhoTexto(...args){
  return textSize(...args);
}

function alinharTexto(...args){
  return textAlign(...args);
}

function texto(...args){
  return text(...args);
}

function tamanhoDaBorda(...args){
  return strokeWeight(...args);
}

function borda(...args){
  return stroket(...args);
}

function borda(...args){
  return stroke(...args);
}

// Controlar o Sprite com as teclas do teclado
function setasTeclado(nome, v) {
  if (keyCode == RIGHT_ARROW) {
    nome.setSpeed(v, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    nome.setSpeed(v, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    nome.setSpeed(v, 180);
  }
  else if (keyCode == UP_ARROW) {
    nome.setSpeed(v, 270);
   }
  return false;
}

// Controlar o Sprite com as teclas do teclado somente para a esquerda e direita
function esquerdaEdireita(nome, v) {
    if (keyDown(RIGHT_ARROW) && nome.position.x < (width - (nome.width / 2))) {
      nome.position.x += v;
    }
    if (keyDown(LEFT_ARROW) && nome.position.x > (astronauta2.width / 2)) {
      nome.position.x -= v;
    }
}
