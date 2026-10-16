export type Testimonial = {
  name: string;
  /** Nome do arquivo da miniatura em src/assets/testimonials (sem extensão). Sem arquivo, usa a miniatura do YouTube. */
  slug: string;
  /** Link do vídeo (YouTube, Vimeo, arquivo .mp4 ou link de incorporação). Sem link, o depoimento não aparece. */
  video: string;
};

/** O primeiro depoimento com vídeo vira o destaque; os demais ficam na grade. */
export const TESTIMONIALS: Testimonial[] = [
  { name: "Jobson Medeiros", slug: "jobson", video: "https://youtu.be/7J-DIUGUpfQ" },
  { name: "Bruno Nascimento", slug: "bruno", video: "https://youtu.be/iAezB6xcdm8" },
  { name: "Gilberto Cunha", slug: "gilberto", video: "https://www.youtube.com/shorts/qiuZcIJwIXA?feature=share" },
  { name: "Alesandro Damaceno", slug: "alessandro", video: "https://youtu.be/STJVUHrbxhk" },
  { name: "André Ortelan", slug: "andre", video: "https://youtu.be/q75kB_M_ci0" },
];
