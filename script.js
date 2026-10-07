// ===============================
// DESAFIO DA ARTE
// ===============================


// PERGUNTAS DO JOGO

const perguntas = [
    {
            pergunta: "Quais são as três cores primárias?",
                    alternativas: [
                                "Vermelho, azul e amarelo",
                                            "Verde, roxo e laranja",
                                                        "Preto, branco e cinza",
                                                                    "Rosa, marrom e verde"
                                                                            ],
                                                                                    correta: 0
                                                                                        },

                                                                                            {
                                                                                                    pergunta: "Qual destas é uma cor secundária?",
                                                                                                            alternativas: [
                                                                                                                        "Azul",
                                                                                                                                    "Amarelo",
                                                                                                                                                "Verde",
                                                                                                                                                            "Vermelho"
                                                                                                                                                                    ],
                                                                                                                                                                            correta: 2
                                                                                                                                                                                },

                                                                                                                                                                                    {
                                                                                                                                                                                            pergunta: "Qual elemento da arte pode ser reto, curvo ou ondulado?",
                                                                                                                                                                                                    alternativas: [
                                                                                                                                                                                                                "Linha",
                                                                                                                                                                                                                            "Textura",
                                                                                                                                                                                                                                        "Cor",
                                                                                                                                                                                                                                                    "Som"
                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                    correta: 0
                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                    pergunta: "Qual destas é uma forma geométrica?",
                                                                                                                                                                                                                                                                                            alternativas: [
                                                                                                                                                                                                                                                                                                        "Círculo",
                                                                                                                                                                                                                                                                                                                    "Nuvem",
                                                                                                                                                                                                                                                                                                                                "Água",
                                                                                                                                                                                                                                                                                                                                            "Vento"
                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                            correta: 0
                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                                                                            pergunta: "O que a textura pode representar em uma obra de arte?",
                                                                                                                                                                                                                                                                                                                                                                                    alternativas: [
                                                                                                                                                                                                                                                                                                                                                                                                "A aparência ou sensação de uma superfície",
                                                                                                                                                                                                                                                                                                                                                                                                            "Somente o tamanho da obra",
                                                                                                                                                                                                                                                                                                                                                                                                                        "A velocidade da pintura",
                                                                                                                                                                                                                                                                                                                                                                                                                                    "A quantidade de cores"
                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                    correta: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    pergunta: "A arte rupestre era produzida principalmente:",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            alternativas: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "Em computadores",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Em paredes e pedras de cavernas e abrigos",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "Em telas digitais",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "Em livros modernos"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            correta: 1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            pergunta: "Qual destas é uma manifestação artística tridimensional?",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    alternativas: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "Escultura",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "Desenho",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "Fotografia",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Poema"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    correta: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    pergunta: "As cores quentes geralmente incluem:",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            alternativas: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "Azul e verde",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Roxo e azul",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "Vermelho, laranja e amarelo",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "Verde e azul"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            correta: 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            pergunta: "Qual técnica utiliza tinta aplicada sobre uma superfície?",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    alternativas: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "Pintura",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "Escultura",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "Dança",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Fotografia"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    correta: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    pergunta: "Um desenho que representa o próprio artista é chamado de:",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            alternativas: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "Paisagem",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Autorretrato",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "Natureza-morta",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "Colagem"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            correta: 1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ];

                                                                                        
   // VARIÁVEIS

   let perguntaAtual = 0;
   let pontuacao = 0;
   let vidas = 3;
   let respostaSelecionada = false;


   // EASTER EGGS

   let letrasEncontradas = [];


   // ELEMENTOS

   const inicio = document.getElementById("inicio");
   const jogo = document.getElementById("jogo");
   const final = document.getElementById("final");

   const btnComecar = document.getElementById("btnComecar");
   const btnProxima = document.getElementById("btnProxima");
   const btnReiniciar = document.getElementById("btnReiniciar");

   const pergunta = document.getElementById("pergunta");
   const alternativas = document.getElementById("alternativas");
   const feedback = document.getElementById("feedback");

   const pontuacaoElemento = document.getElementById("pontuacao");
   const vidasElemento = document.getElementById("vidas");
   const numeroQuestao = document.getElementById("numeroQuestao");

   const pontuacaoFinal = document.getElementById("pontuacaoFinal");
   const mensagemFinal = document.getElementById("mensagemFinal");

   const letrasContainer = document.getElementById("letrasEncontradas");
   const premio = document.getElementById("premio");


   // MUDAR DE TELA

   function mostrarTela(tela) {

       document.querySelectorAll(".tela").forEach(function(elemento) {
               elemento.classList.remove("ativa");
                   });

                       tela.classList.add("ativa");
                       }


                       // INICIAR JOGO

                       btnComecar.addEventListener("click", function() {

                           perguntaAtual = 0;
                               pontuacao = 0;
                                   vidas = 3;

                                       mostrarTela(jogo);

                                           atualizarInformacoes();
                                               mostrarPergunta();
                                               });


                                               // MOSTRAR PERGUNTA

                                               function mostrarPergunta() {

                                                   respostaSelecionada = false;

                                                       feedback.textContent = "";
                                                           btnProxima.style.display = "none";

                                                               const perguntaAtualObjeto = perguntas[perguntaAtual];

                                                                   pergunta.textContent = perguntaAtualObjeto.pergunta;

                                                                       alternativas.innerHTML = "";

                                                                           perguntaAtualObjeto.alternativas.forEach(function(opcao, indice) {

                                                                                   const botao = document.createElement("button");

                                                                                           botao.textContent = opcao;
                                                                                                   botao.classList.add("alternativa");

                                                                                                           botao.addEventListener("click", function() {
                                                                                                                       verificarResposta(indice, botao);
                                                                                                                               });

                                                                                                                                       alternativas.appendChild(botao);
                                                                                                                                           });

                                                                                                                                               atualizarInformacoes();
                                                                                                                                               }

    
   // VERIFICAR RESPOSTA

   function verificarResposta(indice, botaoClicado) {

       if (respostaSelecionada) {
               return;
                   }

                       respostaSelecionada = true;

                           const perguntaAtualObjeto = perguntas[perguntaAtual];

                               const botoes = document.querySelectorAll(".alternativa");

                                   botoes.forEach(function(botao) {
                                           botao.disabled = true;
                                               });


                                                   if (indice === perguntaAtualObjeto.correta) {

                                                           botaoClicado.classList.add("correta");

                                                                   pontuacao += 10;

                                                                           feedback.textContent = "🎉 Muito bem! Você acertou!";
                                                                                   feedback.style.color = "#16852a";

                                                                                       } else {

                                                                                               botaoClicado.classList.add("errada");

                                                                                                       botoes[perguntaAtualObjeto.correta].classList.add("correta");

                                                                                                               vidas--;

                                                                                                                       feedback.textContent = "💡 Quase! A resposta correta está destacada.";
                                                                                                                               feedback.style.color = "#c2185b";
                                                                                                                                   }


                                                                                                                                       atualizarInformacoes();

                                                                                                                                           btnProxima.style.display = "block";
                                                                                                                                           }


                                                                                                                                           // PRÓXIMA PERGUNTA

                                                                                                                                           btnProxima.addEventListener("click", function() {

                                                                                                                                               perguntaAtual++;

                                                                                                                                                   if (perguntaAtual >= perguntas.length || vidas <= 0) {
                                                                                                                                                           terminarJogo();
                                                                                                                                                               } else {
                                                                                                                                                                       mostrarPergunta();
                                                                                                                                                                           }
                                                                                                                                                                           });


                                                                                                                                                                           // ATUALIZAR INFORMAÇÕES

                                                                                                                                                                           function atualizarInformacoes() {

                                                                                                                                                                               pontuacaoElemento.textContent = pontuacao;
                                                                                                                                                                                   vidasElemento.textContent = vidas;
                                                                                                                                                                                       numeroQuestao.textContent = Math.min(perguntaAtual + 1, perguntas.length);
                                                                                                                                                                                       }


                                                                                                                                                                                       // FINALIZAR JOGO

                                                                                                                                                                                       function terminarJogo() {

                                                                                                                                                                                           mostrarTela(final);

                                                                                                                                                                                               pontuacaoFinal.textContent = pontuacao;

                                                                                                                                                                                                   if (pontuacao === 100) {

                                                                                                                                                                                                           mensagemFinal.textContent =
                                                                                                                                                                                                                       "🏆 Perfeito! Você acertou todas as perguntas!";

                                                                                                                                                                                                                           } else if (pontuacao >= 70) {

                                                                                                                                                                                                                                   mensagemFinal.textContent =
                                                                                                                                                                                                                                               "🌟 Muito bom! Você conhece bastante sobre Arte!";

                                                                                                                                                                                                                                                   } else if (pontuacao >= 40) {

                                                                                                                                                                                                                                                           mensagemFinal.textContent =
                                                                                                                                                                                                                                                                       "🎨 Bom trabalho! Continue aprendendo sobre Arte!";

                                                                                                                                                                                                                                                                           } else {

                                                                                                                                                                                                                                                                                   mensagemFinal.textContent =
                                                                                                                                                                                                                                                                                               "💪 Continue tentando! Todo artista aprende praticando!";
                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                       atualizarColecao();

                                                                                                                                                                                                                                                                                                           verificarPremio();
                                                                                                                                                                                                                                                                                                           }
   // ===============================
   // EASTER EGGS
   // ===============================

   const easterEggs = document.querySelectorAll(".easter-egg");


   easterEggs.forEach(function(egg, indice) {

       egg.addEventListener("click", function() {

               const letra = egg.dataset.letra;

                       // Impede descobrir o mesmo easter egg duas vezes

                               if (egg.classList.contains("encontrado")) {
                                           return;
                                                   }

                                                           egg.classList.add("encontrado");

                                                                   letrasEncontradas[indice] = letra;

                                                                           // Mostra a letra encontrada

                                                                                   alert(
                                                                                               "🌹 Você encontrou uma letra secreta!\n\n" +
                                                                                                           letra + " 🌹"
                                                                                                                   );

                                                                                                                           // Deixa o objeto visualmente diferente

                                                                                                                                   egg.style.opacity = "1";
                                                                                                                                           egg.style.background = "#ffd1df";

                                                                                                                                                   atualizarColecao();
                                                                                                                                                       });

                                                                                                                                                       });


                                                                                                                                                       // ATUALIZAR COLEÇÃO

                                                                                                                                                       function atualizarColecao() {

                                                                                                                                                           const spans = letrasContainer.querySelectorAll("span");

                                                                                                                                                               spans.forEach(function(span, indice) {

                                                                                                                                                                       if (letrasEncontradas[indice]) {

                                                                                                                                                                                   span.textContent =
                                                                                                                                                                                                   letrasEncontradas[indice] + " 🌹";

                                                                                                                                                                                                               span.classList.add("encontrada");

                                                                                                                                                                                                                       } else {

                                                                                                                                                                                                                                   span.textContent = "?";
                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                               });
                                                                                                                                                                                                                                               }


                                                                                                                                                                                                                                               // VERIFICAR SE ENCONTROU TODAS AS LETRAS

                                                                                                                                                                                                                                               function verificarPremio() {

                                                                                                                                                                                                                                                   const encontrouTodas =
                                                                                                                                                                                                                                                           letrasEncontradas.length === 5 &&
                                                                                                                                                                                                                                                                   letrasEncontradas.every(function(letra) {
                                                                                                                                                                                                                                                                               return letra !== undefined;
                                                                                                                                                                                                                                                                                       });


                                                                                                                                                                                                                                                                                           if (encontrouTodas) {

                                                                                                                                                                                                                                                                                                   premio.classList.remove("escondido");

                                                                                                                                                                                                                                                                                                       } else {

                                                                                                                                                                                                                                                                                                               premio.classList.add("escondido");
                                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                                   }


                                                                                                                                                                                                                                                                                                                   // REINICIAR

                                                                                                                                                                                                                                                                                                                   btnReiniciar.addEventListener("click", function() {

                                                                                                                                                                                                                                                                                                                       perguntaAtual = 0;
                                                                                                                                                                                                                                                                                                                           pontuacao = 0;
                                                                                                                                                                                                                                                                                                                               vidas = 3;

                                                                                                                                                                                                                                                                                                                                   letrasEncontradas = [];

                                                                                                                                                                                                                                                                                                                                       // Resetar easter eggs

                                                                                                                                                                                                                                                                                                                                           easterEggs.forEach(function(egg) {

                                                                                                                                                                                                                                                                                                                                                   egg.classList.remove("encontrado");

                                                                                                                                                                                                                                                                                                                                                           egg.style.opacity = "0.25";
                                                                                                                                                                                                                                                                                                                                                                   egg.style.background = "transparent";
                                                                                                                                                                                                                                                                                                                                                                       });


                                                                                                                                                                                                                                                                                                                                                                           premio.classList.add("escondido");

                                                                                                                                                                                                                                                                                                                                                                               atualizarColecao();

                                                                                                                                                                                                                                                                                                                                                                                   mostrarTela(inicio);
                                                                                                                                                                                                                                                                                                                                                                                   });                                                                                                                                                                                                                                                                                                                                                                                                                                                    