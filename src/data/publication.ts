export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "IROS Workshop",
    title: "InsertScale: A Benchmark towards Foundation Visuo-Tactile Policy for Insertion Task",
    authors: "<b>Congsheng Xu*</b>, Jingxiang Guo*, Baijun Chen*,  Liuhaichen Yang, Zhen Zou, Yuzhang Li, Jieji Ren, Yiming Wang, Yichao Yan, Yao Mu†, Xiaokang Yang†",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Propose a visuo-tactile benchmark and scalable policy learning framework for insertion tasks, providing standardized tasks, metrics, and multi-modal datasets to evaluate and train foundation policies.",
    imageUrl:
      "/images/InsertScale.png",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
