"""
Proz - Talento Cloud
Introdução à Programação com foco em Front-End - Turma 28
Introdução à Programação
Desenvolvimento 4 - 109826
Emily Matias

Faça uma função calculadora de dois nºs com três parâmetros: os dois primeiros serão os nºs da operação, e o terceiro será a entrada que definirá a operação a ser executada. Considere a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um nº de operação que não exista, o resultado deverá ser 0.
"""

def calculadora(num1, num2, operacao):
  if operacao == 1:
    return num1 + num2
  elif operacao == 2:
    return num1 - num2
  elif operacao == 3:
    return num1 * num2
  elif operacao == 4:
    if num2 == 0:
      return "Não é possível dividir por zero."
    else:
      return num1 / num2
  else:
    return 0