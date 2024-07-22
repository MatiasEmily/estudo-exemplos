/*
Proz - Talento Cloud
Introdução à Programação com foco em Front-End - Turma 28
JavaScript I
Emily Matias

Desenvolvimento Extra 5.3 #109988

Enunciado:
Crie um projeto com dois arquivos: index.html e script.js.
No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.
Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo',
e um elemento que represente um produtoNome à venda. O produtoNome precisa incluir pelo menos o nome, a descrição e o preço.
Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem.
Procure usar o método simples e o método complexo, ensinados neste tópico.

Resposta:
*/

// Observação: normalmente organizo o código na ordem de elementos criados, mas separei pelo tipo de manipulação para facilitar a leitura.

// Cria elementos
let main = document.createElement('main');
let titulo = document.createElement('h1');
let produtos = document.createElement('div');
let produtoNome = document.createElement('h2');
let img = document.createElement('img');
let descricao = document.createElement('div');

// Manipula conteúdo
titulo.id = 'titulo';
titulo.innerText = 'Produtos à venda';

produtos.className = 'produto';
produtoNome.innerHTML = '<a href="https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/" target="_blank">Disco Elysium - The Final Cut</a>';
img.src = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg';
img.alt = 'Disco Elysium - The Final Cut';
descricao.innerHTML = `
  <h3>Preço:</h3>
  R$ 75,49
  <h3>Data de lançamento:</h3>
  15/out./2019
  <h3>Desenvolvedor:</h3>
  ZA/UM
  <h3>Descrição:</h3>
  <p><em>Disco Elysium - The Final Cut</em> é um RPG inovador. Você é um detetive com um sistema de habilidades único à sua disposição e todo um quarteirão inteiro para explorar. Interrogue personagens inesquecíveis, desvende assassinatos ou receba propinas. Torne-se um herói ou uma calamidade de ser humano.</p>
`;

// Manipula estilos
document.body.style.margin = '0';
document.body.style.fontFamily = "'Roboto', sans-serif";

main.style.backgroundColor = '#cccccc';
main.style.maxWidth = '600px';
main.style.margin = '30px auto';
main.style.padding = '20px';
main.style.borderRadius = '10px';

titulo.style.textAlign = 'center';
titulo.style.color = '#109988';

produtoNome.style.textAlign = 'center';
produtoNome.querySelector('a').style.color = '#109988';

img.style.display = 'block';
img.style.margin = '0 auto';

descricao.querySelectorAll('h3').forEach((h3)=>{
  h3.style.margin = '5px 0';
  h3.style.color = '#109988';
});

// Adiciona ao DOM
document.body.appendChild(main);
main.appendChild(titulo);
main.appendChild(produtos);

produtos.appendChild(img);
produtos.appendChild(produtoNome);
produtos.appendChild(descricao);