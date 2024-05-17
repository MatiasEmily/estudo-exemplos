"""
Proz - Talento Cloud
Introdução à Programação com foco em Front-End - Turma 28
Introdução à Programação
Desenvolvimento 5 - 109830
Emily Matias

Enunciado:
Faça uma função calculadora que os números e as operações serão feitas pelo usuário.
O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair.

No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.
Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada.
Depois precisa executar a operação e mostrar o resultado na tela.
Quando o usuário escolher a opção “Sair”, o sistema irá parar.
É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 
"""

def calculadora():
  while True:
    # Mostra o menu de operações
    print("Bem-vindo(a) à calculadora!\nEscolha uma operação:\n\n"
      "1: Soma\n"
      "2: Subtração\n"
      "3: Multiplicação\n"
      "4: Divisão\n"
      "0: Sair\n")
      
    # Pede a escolha do usuário
    opcao = input("Digite o número para a operação correspondente: ")

    # Para o sistema
    if opcao == '0':
      print("Parando o sistema... Até a próxima!\n")
      break
    
    # Verifica opção de menu escolhida
    if opcao in ['1', '2', '3', '4']:

      # Pede os valores ao usuário
      num1 = float(input("Insira o primeiro valor: "))
      num2 = float(input("Insira o segundo valor: "))

      # Executa a operação
      if opcao == '1':
        resultado = num1 + num2
      elif opcao == '2':
        resultado = num1 - num2
      elif opcao == '3':
        resultado = num1 * num2
      elif opcao == '4':
        if num2 != 0:
          resultado = num1 / num2
        else:
          print("\nImpossível dividir por zero.\n")
          continue

    # Opção inválida
    else:
      print("\nEssa opção não existe.\n")
      continue

    # Mostra o resultado
    print(f"\nResultado: {resultado}\n")

print()
calculadora()