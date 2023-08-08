const quotes = [
  {
    quote:
      "우리는 행복한 기억으로 살죠. 하지만 우리는 불행한 기억으로도 살아요. 상실과 폐허의 힘으로 말입니다.",
    author: "김언수, 캐비닛",
  },
  {
    quote:
      "누군가 무너뜨리지 않아도 일어서는 밤이 있고 누군가 일으켜주지 않아도 일어서는 밤이 있다고 하면, 불행은 생각보다 평범하고 시시한 모습으로 우리 곁에 있다고 말한다며느 너와 내가 더 잘 잘 수 있을까?",
    author: "백가희, 격일 백문백답 2호",
  },
  {
    quote:
      "인류는 열정으로 가득 차있어. 의학, 법률, 경제, 기술따위는 삶을 유지하는데 필요해. 하지만 시와 미, 낭만, 사랑은 삶의 목적인 거야.",
    author: "죽은 시인의 사회",
  },
  {
    quote:
      "나는 희망을 희망할 거야. 그리고 자주 잊을거야. 나를 몰아넣었던 사람들을, 나를 비참하게 했던 말들을, 나를 고독하게 했던 눈빛들을, 용서할 수는 없겠지만 잊을 수 있다고 희망을 품을거야, 구김이야 지겠지만, 발자국이야 남겠지만. 곧 잊어버릴 거야.",
    author: "백가희, 인스타그램",
  },
  {
    quote:
      "살고 싶을 때 바다에 갔고, 죽고 싶을 때도 바다에 갔다. 사라질세라 바다를 가방에 담아왔지만 돌아와 가방을 열면 언제나 바다는 없었다.",
    author: "허연, 조개무덤",
  },
  {
    quote:
      "내일과 내일들이 모여서 영원이 되는 걸 텐데, 왜 마리는 내일도 사랑한다는 말은 들어주면서 영원히 사랑한다는 말은 싫어하는 걸까. 그런 의문이 들기는 했으나 수아에게는 마리가 제일 중요하고 소중했다. 불로불사의 인어는 입맞춤과 눈빛 하나하나에 자신의 생을 담고 온 마음을 실어 영원을 노래하고 있었다.",
    author: "김청귤, 재와 물거품",
  },
  {
    quote:
      "아무도 산에 걸려 넘어지진 않는다. 당신을 휘청이게 하는 모든 것은 모두 작은 조약돌뿐이다. 당신 길에 놓여있는 모든 조약돌들을 지나가라. 그럼 산을 넘었다는 것을 깨닫게 될 것이다.",
    author: "작자 미상",
  },
  {
    quote:
      "가만히 파도 소리를 듣는다. 파도는 당신의 맥박을 닮았고, 더이상 단어따위는 종말해도 무관할 이 순간을 닮았고, 부서져도 좋을 심장을 닮았다. 오래 전 당신과 나는 어쩌면 진짜 하나의 바다였다고 생각했다.",
    author: "안리타, 파도는 당신의 맥박을 닮았고",
  },
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다.",
    author: "헬렌 켈러",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const arraysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = arraysQuote.quote;
author.innerText = arraysQuote.author;
