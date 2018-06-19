###Teste de Conhecimentos Analista Ti Front-end Ahgora Sistemas

##Olá, como parte do processo de contratação na Ahgora, precisamos que você desenvolva um aplicativo com os seguintes recursos:

##1) Pesquise e mostre vídeos do YouTube por um termo de pesquisa;
 Realizei a busca de vídeo por um termo de pesquisa

##2) Mostra as cinco palavras mais usadas nos títulos e descrições do resultado;

##3) Mostra quantos dias são necessários para assistir a todos os vídeos retornados, com as seguintes condições:

##4) O usuário informará quanto tempo ele pode gastar diariamente durante uma semana. Por exemplo, [15, 120, 30, 150, 20, 40, 90] em minutos.
- Criei os inputs com os dias da semana, e realizei uma função que passa o id do video e retorna a duração de cada vídeo, porém não consegui realizar uma promise correta para guardar os valores em array, e então manipular os dados com um filter.

##5) O usuário não gastará mais tempo assistindo a vídeos do que o máximo diário.

##6) O usuário não iniciará outro vídeo a menos que ele possa terminar no mesmo dia.

##7) Vídeos mais longos que o dia mais longo serão ignorados.

O usuário assistirá aos vídeos na ordem exata, conforme retornado.
Exemplo: considerando a semana como mencionada acima e a pesquisa retornando 10 vídeos com as seguintes durações: [20, 30, 60, 90, 200, 30, 40, 20, 60, 15], no primeiro dia nenhum vídeo será assistido , no segundo o usuário assistirá 3 vídeos [20, 30, 60], no terceiro nenhum será assistido, no quarto 2 [90, 30] será assistido e um será ignorado, no quinto nenhum será assistiu, no sexto dia, um vídeo [40] será assistido, no sétimo dia 2 será assistido [20, 60] e no oitavo dia o último será assistido [15].
Apenas os primeiros 200 vídeos devem ser considerados.

Restrições
Você pode desenvolver usando qualquer idioma, ferramenta ou biblioteca, desde que seja de código aberto e público disponível.
Nenhuma informação adicional será fornecida. Qualquer decisão do projeto pode ser considerada correta.
Pode ser um aplicativo da web, móvel ou desktop.
Qualquer informação sobre como executar o projeto deve ser fornecida.
- O projeto ahgora teste foi desenvolvido, utilizando bootstrap para o layout e angular para a comunicação da api do youtube 3.
Você pode nos enviar um pacote com o código-fonte ou um link para o projeto no github ou outro CVS.

Nós realmente apreciamos seu tempo resolvendo este desafio e esperamos ver você em breve!
