export type Tema = "comida" | "objeto" | "animal" | "fruta" | "país";

const temas = ["comida", "objeto", "animal", "fruta", "país"] as const;
const palavras: Record<typeof temas[number], string[]> = {
  comida: ["Arroz", "Hamburguer", "Pizza", "Lasanha", "Sushi"],
  objeto: ["Mesa", "Cadeira", "Quadro", "Computador", "Celular"],
  animal: ["Cachorro", "Gato", "Elefante", "Tigre", "Pinguim"],
  fruta: ["Maca", "Banana", "Laranja", "Manga", "Uva"],
  país: ["Brasil", "Japao", "Canada", "Alemanha", "Australia"]
};


export function gameDataConfig() {
  let temaSelecionado: keyof typeof palavras;
  let palavraSelecionada: string;

  function sortearTema(): keyof typeof palavras {
    return temas[Math.floor(Math.random() * temas.length)];
  }

  function sortearPalavra(tema: keyof typeof palavras): string {
    const palavrasDoTema = palavras[tema];
    return palavrasDoTema[Math.floor(Math.random() * palavrasDoTema.length)];
  }

  temaSelecionado = sortearTema();
  palavraSelecionada = sortearPalavra(temaSelecionado);

  return { tema: temaSelecionado, palavra: palavraSelecionada };
}

export function CalculateScore(time: string, tentativas: number, win: boolean): number {
  // Desestruturando as horas, minutos e segundos do tempo formatado
  const [hours, minutes, seconds] = time.split(':').map(Number);

  // Convertendo o tempo total para segundos
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Definindo uma pontuação base (exemplo)
  let score = 1000; // Pontuação inicial

  // Penalidade por tempo (quanto maior o tempo, menor a pontuação)
  const timePenalty = Math.floor(totalSeconds / 10); // Penaliza 1 ponto a cada 10 segundos

  // Penalidade por tentativas
  const attemptsPenalty = tentativas * 10; // Penaliza 10 pontos por cada tentativa

  // Calculando a pontuação final
  score -= (timePenalty + attemptsPenalty);

  // Se o jogador não venceu, a pontuação é zero
  if (!win) {
      score = 0;
  }

  // Garantir que a pontuação não seja negativa
  return Math.max(score, 0);
}

