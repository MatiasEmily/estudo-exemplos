"""
Proz - Talento Cloud
Introdução à Programação com foco em Front-End - Turma 28
Introdução à Programação
Desenvolvimento 6 - 109835
Emily Matias

Enunciado:
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano,
o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
"""

# Entrada do nome do usuário
nome = input("Digite o nome completo: ")

# Laço que se repetirá até inserir um valor válido
while True:
  try:
    ano = int(input("Digite o ano de nascimento (entre 1922 e 2021): ")) # Entrada do ano, convertida para inteiro e armazenada em variável
    if 1922 <= ano <= 2021: # Verifica se o ano é entre 1922 e 2021
      break # Pára o laço quando a condição for verdadeira, e o programa continua
    else: # Se o número não for entre 1922 e 2021, exibe mensagem de erro
      print(f"Ano {ano} inválido, tente novamente.\n")
  except ValueError as erro: # Exceção se não for entrada de número inteiro, exibe mensagem de erro
    print(f"Por favor, digite um número inteiro.\nErro: {erro}\n")

ano_atual = 2022 # É 2024, mas a questão pedia 2022. Armazenei em variável para legibilidade
idade = ano_atual - ano # Calcula a idade

# Saída que exibe nome e idade do usuário
print(f"\nSeu nome é {nome} e você faz {idade} anos em {ano_atual}.")