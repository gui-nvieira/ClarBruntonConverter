# ClarBruntonConverter
Conversor de atitudes geológicas (Geological Compass Attitude Converter) - Criado por Guilherme Vieira

Este é um código Javascript em estágio inicial para a conversão de atitudes planares colhidas por meio de bússolas geológicas dos modelos Clar e Brunton.

## Conceito
Verificar referências. 

## Como usar?
Na atual versão, que pode ser verificada [AQUI](https://github.com/gui-nvieira/ClarBruntonConverter/tree/master), o usuário precisa inserir os valores de atitudes diretamente no código e executar em um html teste ou em um terminal Node.js. 

1. Baixe o código e execute utilizando o Node.js ou importe em um html.
2. Use o console para executar as seguintes funções:

- clarBruntonConverter(dipDir,dip) -> Para conversão de notação Clar para Brunton. Substitua **"dipDir"** pelo valor de direção do mergulho e **"dip"** pelo ângulo de mergulho.
- bruntonClarSimple(strike,dip,dir) -> Para conversão de notação Brunton para Clar. Substitua **"strike"** pela direção, **"dip"** pelo ângulo de mergulho e **"dir"** pela direção de mergulho, em formato string e em maiúsculas.

## Próximos updates:
- Conversão de atitudes rumo para azimute (e vice-versa);
- Melhorias para inserir direção de mergulho no formato Brunton, utilizando arrays ou objetos.
- Explicação do conceito de maneira resumida neste README;

## Metas:
- Interface web com HTML/CSS, com o codigo JS minificado;
- Web app com suporte a utilização offline.

## Referências
O [material de referência](https://edisciplinas.usp.br/pluginfile.php/5178772/mod_resource/content/1/Aula-B%C3%BAssolas%20-%20CRP.pdf) consultado sobre os sistemas de atitudes e bússolas foi produzido pela a Profa. Dra. Cláudia R. Passarelli, da Geologia-USP.

## Dev Notes:

Este é um código foi produzido em poucas horas e ainda precisa de refino, porem funciona bem. Hoje não existe plataforma que faça este tipo de conversão.
