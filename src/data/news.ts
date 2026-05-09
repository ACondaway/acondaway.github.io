export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "2026-02-25",
    title: "I am now a Research Intern at BAAI!",
    description: "Work on Interesting Frontier Topics.",
  },
  {
    date: "2025-12-1",
    title: "I am now a Research Intern at Seed Robotics!",
    description: "Work on foundation models for robotic manipulation.",
  },
  {
    date: "2025-09-12",
    title: "I am now so-called a Ph.D. Zero Student!",
    description: "Thankfully, I got recommended for admission and got a chance to be supervised by Prof. Xiaokang Yang and Prof. Yao Mu.",
  },
  {
    date: "2025-08-23",
    title: "TriFusion Organizer",
    description: "Our proposed workshop in SIGGRAPH ASIA, TriFusion have been approved by the committee, I take the role of the organizer and the student leader, see you in HongKong this December!",
  },
  // If you don't want to show news, just make the array empty.
  /*{
    date: "March 2024",
    title: "Paper accepted at ICML 2024",
    description: "Our work on causal discovery in time series data has been accepted at ICML 2024.",
    link: "https://icml.cc/",
  }*/
];
