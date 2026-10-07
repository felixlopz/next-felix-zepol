export type Track = {
  id: string;
  title: string;
  cover: string;
  src: string;
  duration: number;
  tagline?: string;
  youtube?: string;
};

// El orden de esta lista es el orden de reproducción.
export const tracks: Track[] = [
  {
    id: "dia-cero",
    title: "Día Cero",
    cover: "/dia-cero.png",
    src: "/audio/dia-cero.mp3",
    duration: 192,
  },
  {
    id: "rosa",
    title: "Rosa",
    cover: "/rosa.png",
    src: "/audio/rosa.mp3",
    duration: 195,
  },
  {
    id: "criminal",
    title: "Criminal",
    cover: "/criminal.png",
    src: "/audio/criminal.mp3",
    duration: 220,
  },
  {
    id: "indomables",
    title: "Indomables",
    cover: "/indomables.png",
    src: "/audio/indomables.mp3",
    duration: 338,
  },
  {
    id: "el-principio-del-final",
    title: "El Principio Del Final",
    cover: "/epdf.png",
    src: "/audio/el-principio-del-final.mp3",
    duration: 274,
  },
  {
    id: "poesia-moderna",
    title: "Poesía Moderna",
    cover: "/pm.png",
    src: "/audio/poesia-moderna.mp3",
    duration: 270,
    tagline: "Entregarlo todo no debería dar temor",
    youtube: "https://www.youtube.com/watch?v=pOmzulX0pN0",
  },
  {
    id: "sin-oxigeno-para-dos",
    title: "Sin Oxígeno Para Dos",
    cover: "/sop2.png",
    src: "/audio/sin-oxigeno-para-dos.mp3",
    duration: 197,
    tagline: "La vida que quieres te cuesta la vida que tienes",
    youtube: "https://www.youtube.com/watch?v=Y03DI4M8YPk",
  },
  {
    id: "impacto",
    title: "Impacto",
    cover: "/impacto.jpeg",
    src: "/audio/impacto.mp3",
    duration: 189,
  },
  {
    id: "si-las-estrellas-se-alinean",
    title: "Si Las Estrellas Se Alinean",
    cover: "/slesa.jpg",
    src: "/audio/si-las-estrellas-se-alinean.mp3",
    duration: 266,
  },
];
