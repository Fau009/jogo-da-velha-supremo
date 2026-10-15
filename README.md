# Jogo da Velha Supremo

Uma coletânea com **11 jogos da velha diferentes**, jogados no mesmo aparelho, com nomes dos jogadores, placar geral e histórico — tudo salvo no próprio navegador.

**Jogar:** https://fau009.github.io/jogo-da-velha-supremo/

## Como funciona

1. Na **tela inicial**, adicione os jogadores da sessão (Gerenciar). Dá para ter 2 ou mais.
2. Toque em **Jogar** e escolha um dos 11 modelos.
3. Escolha os **2 participantes** daquela partida (com opção de trocar os lados) e comece.
4. Dá para **voltar ao início** a qualquer momento (partida abandonada não conta).
5. No fim: revanche, escolher outro jogo ou início. O resultado entra no **placar geral** e no **histórico**.

A tela inicial mostra o placar geral (vitórias, empates, derrotas e pontos: 3 por vitória, 1 por empate), quantas partidas por versão e o histórico das últimas partidas. Tudo fica salvo no `localStorage`; o botão **Limpar sessão** apaga tudo.

## Os 11 modelos

| Jogo | Tabuleiro | Como vence |
|---|---|---|
| **Clássico** | 3×3 | O jogo da velha de sempre: 3 em linha |
| **Supremo** (Ultimate) | 9 tabuleiros 3×3 | Conquistar 3 tabuleiros em linha; a jogada manda o adversário para o tabuleiro correspondente |
| **Engole-Engole** | 3×3 | Peças de 3 tamanhos que cobrem as menores; 3 peças suas visíveis em linha |
| **Gomoku** | 15×15 | 5 (ou mais) em linha |
| **Lig4** | 7×6 com gravidade | 4 em linha |
| **Invertido** | 3×3 | Quem fecha 3 em linha **perde** |
| **Livre** | 3×3 | Qualquer um coloca X ou O; quem fecha 3 iguais vence |
| **Numérico** | 3×3 | Ímpares × Pares; linha que soma 15 |
| **Ordem e Caos** | 6×6 | Ordem quer 5 iguais; Caos impede até encher |
| **BIG** | 5×5 | 4 (ou mais) em linha |
| **Três Móveis** | 3×3 | 3 peças cada: coloca e depois movimenta para alinhar |

As regras seguem o manual de referência (incluído como base do projeto). Algumas são adaptações próprias, indicadas no manual.

## Detalhes técnicos

- Um único `index.html` com HTML, CSS e JS puros, sem dependências.
- Dados salvos no `localStorage` (o "cache" do navegador); nada sai do aparelho.
- Tema claro e escuro. Instalável como app (PWA). Publicado pelo GitHub Pages.
