export type Tema = "comida" | "objeto" | "animal" | "fruta" | "país";

const temas = ["comida", "objeto", "animal", "fruta", "país"] as const;
const palavras: Record<typeof temas[number], string[]> = {
  comida: ["Arroz", "Hamburguer", "Pizza", "Lasanha", "Sushi"],
  objeto: ["Mesa", "Cadeira", "Quadro", "Computador", "Celular"],
  animal: ["Cachorro", "Gato", "Elefante", "Tigre", "Pinguim"],
  fruta: ["Maçã", "Banana", "Laranja", "Manga", "Uva"],
  país: ["Brasil", "Japão", "Canadá", "Alemanha", "Austrália"]
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
