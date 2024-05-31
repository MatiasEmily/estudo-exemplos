"""
Proz - Talento Cloud
Introdução à Programação com foco em Front-End - Turma 28
Preparação para HTML e CSS
Desenvolvimento Extra 1.4 - 109854
Emily Matias

Enunciado:
A loja de cosméticos ficou muito feliz com seu trabalho e chamaram você novamente!
Dessa vez, eles precisam que você atualize o array de produtos.
Agora, eles estão vendendo rímel ao invés de batons, e cremes hidratantes no lugar de loções.
Além disso, ficaram sem delineadores, então precisam que você remova ele da lista de produtos.
Imprima a nova lista no terminal para verificar que as alterações foram realizadas corretamente.
lista_produtos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores'] 
Como desafio, adicione dois novos produtos da sua escolha à lista. 
"""

# Array de produtos
lista_produtos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores']

# Atualização de produtos
lista_produtos[1], lista_produtos[4] = 'rímel', 'cremes hidratantes' # substitui batons e loções
lista_produtos.pop() # remove último item da lista, delineadores
lista_produtos.append('condicionadores') # adiciona condicionadores ao fim da lista
lista_produtos.append('esfoliantes') # adiciona esfoliantes ao fim da lista

# Imprimir o array
print(f"Temos {lista_produtos} à venda!")