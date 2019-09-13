function personagem(nome, x, y){
    img = createImg('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/'+nome+'.png');
    img.hide();
    image(img, x, y);
    print('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/'+nome+'.png');
	
}


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

function corDeFundo(){
  	background('lightgrey');
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
function desenha(...args){
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
