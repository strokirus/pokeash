# pokeash

###### Desafio

O Ash está a apanhar pokémons num mundo que consiste numa grelha bidimensional infinita de casas.
Em cada casa há exatamente um pokémon.
O Ash começa por apanhar o pokémon que está na casa onde começa. A seguir, move-se para a casa
imediatamente a norte, sul, este ou oeste de onde se encontra e apanha o pokémon que aí se encontrar,
e assim sucessivamente. Atenção: se ele passar numa casa onde já passou (e, portanto, onde já apanhou
um pokémon), já lá não está um pokémon para ele apanhar!
O que queremos saber é: começando com um mundo cheio de pokémons (um em cada casa!), quantos
pokémons o Ash apanha para uma dada sequência de movimentos?

###### Formato do input

O programa deve ler uma linha do stdin, que contém uma sequência de movimentos. Cada movimento é
descrito por uma letra N, S, Eou O(respetivamente: norte, sul, este, oeste).

###### Formato do output

O programa deve escrever uma linha para o stdout, apenas com um número: quantos pokémons o Ash
apanhou?

###### Para executar a aplicação execute os seguintes comandos make.

* Make setup - Para instalar as dependencias do projeto (basicamente o jest para testes)
* Make run - Para executar o projeto utilizando como base o arquivo test.txt
* Make test - Para executar o os testes do projeto