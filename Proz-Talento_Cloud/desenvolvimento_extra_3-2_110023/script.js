/*
Proz - Talento Cloud
Introdução à Programação com foco em Front-End - Turma 28
JavaScript I
Emily Matias

Desenvolvimento Extra 3.2 #110023

Enunciado:
Crie um novo projeto com dois arquivos: index.html e script.js.
No arquivo HTML, defina a estrutura padrão HTML, e inclua uma tag h1 com o título "Conexão com um arquivo JavaScript".
No arquivo JavaScript defina uma função que imprima a mensagem "Conexão feita com sucesso!" no terminal, e execute ela três vezes.
Finalmente, conecte ambos arquivos, abra seu projeto no navegador usando a extensão LiveServer e confira se a mensagem foi impressa três vezes no terminal.

Resposta:
*/

/* Usando função tradicional */
function conectarTrad() {
  console.log("Conexão feita com sucesso!");
}

/* Usando função anônima */
const conectarAnon = function() {
  console.log("Conexão feita com sucesso!");
}

/* Usando arrow function */
const conectarArrow = () => console.log("Conexão feita com sucesso!");

/* Executando as 3 funções */
conectarTrad();
conectarAnon();
conectarArrow();