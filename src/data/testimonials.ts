export type Testimonial = {
  name: string;
  /** Nome do arquivo da miniatura em src/assets/testimonials (sem extensão). */
  slug: string;
  /** Link do vídeo (YouTube, Vimeo, arquivo .mp4 ou link de incorporação). Sem link, o depoimento não aparece. */
  video: string;
};

/** O primeiro depoimento com vídeo vira o destaque; os demais ficam na grade. */
export const TESTIMONIALS: Testimonial[] = [
  { name: "Jobson", slug: "jobson", video: "" },
  { name: "Alessandro", slug: "alessandro", video: "" },
  { name: "André", slug: "andre", video: "" },
  { name: "Bruno Nascimento", slug: "bruno", video: "" },
  { name: "Gilberto Cunha", slug: "gilberto", video: "" },
];
