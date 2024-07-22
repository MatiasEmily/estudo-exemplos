/*
Proz - Talento Cloud
Introdução à Programação com foco em Front-End - Turma 28
JavaScript I
Emily Matias

Desenvolvimento Extra 5.1 #109983

Enunciado:
Crie um projeto com dois arquivos: index.html e script.js.

No arquivo 'index' insira a estrutura base HTML e dentro da tag 'body' inclua quatro tags vazias: h1, ul, a, ol.
Adicione o atributo id="titulo" à tag h1, o atributo href="https://prozeducacao.com.br" à tag 'a', e o atributo id="lista-ordenada" à tag 'ol'.
Na sequência, realize a conexão entre o arquivo HTML e o arquivo JavaScript.

No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a',
e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.

Resposta:
*/

/* Inner Text */
document.getElementById("titulo").innerText = "Manipulando DOM com JS";
document.querySelector("a").innerText = "Proz Educação";

/* Inner HTML */
document.querySelector("ul").innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;

document.getElementById("lista-ordenada").innerHTML = `
  <li><a href="https://github.com/matiasemily/" target="_blank">Meu GitHub</a></li>
  <li><a href="https://www.linkedin.com/in/matiasemily/" target="_blank">Meu LinkedIn</a></li>
  <li><a href="https://www.hackerrank.com/profile/matiasemily" target="_blank">Meu HackerRank</a></li>
`;