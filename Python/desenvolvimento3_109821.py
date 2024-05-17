"""
Proz - Talento Cloud
Introdução à Programação com foco em Front-End - Turma 28
Introdução à Programação
Desenvolvimento 3 - 109821
Emily Matias

Enunciado:
Precisamos imprimir um número para cada andar de um hotel de 20 andares.
Porém, o dono do hotel é supersticioso e optou por não ter um 13º andar.

- Escreva um código que imprima todos os números, exceto o número 13.
- Escreva mais um código que resolva o mesmo problema, mas dessa vez usando o laço de repetição 'while'.

Como desafio, imprima-os em ordem decrescente (20, 19, 18...).
"""

# Resposta com for
for andar in range(20, 0, -1):
  if andar == 13: # faz o L
    continue
  print(andar)

# Resposta com while
andar = 20
while andar > 0:
  if andar != 13: # faz o L de novo
    print(andar)
  andar -= 1
