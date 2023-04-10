import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  agi,
  asimov,
  forca,
  gerador
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Tragetória",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Desenvolvedor Java",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Backend ",
    icon: backend,
  },
  {
    title: "Banco de Dados",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Técnico em informática",
    company_name: "IFSUL",
    icon: starbucks,
    iconBg: "#FFF",
    date: "Fevereiro 2016 - dezembro 2019",
    points: [
      "Algoritmos e lógica de programação",
      "Java, Spring, Android Studio ",
      "MySQL ",
      "HTML, CSS, JS, PHP",
    ],
  },
  {
    title: "Desenvolvedor de software",
    company_name: "Index Labs",
    icon: tesla,
    iconBg: "#FFF",
    date: "Junho de 2019 - Dezembro de 2021",
    points: [
      "Testes de código(E2E e unitários).",
      "Manutenção de hotsites em HTML, JS e CSS.",
      "Utilização de ferramentas de organização de projetos(Trello e RunRunit).",
      "Pair programming em desenvolvimento Front-end.",
    ],
  },
  {
    title: "Desenvolvedor Front-end",
    company_name: "ProjEx IFRS",
    icon: shopify,
    iconBg: "#fff",
    date: "Junho de 2022 - Abril de 2023",
    points: [
      "Desenvolvimento e suporte do site projex.digital",
      "HTML, CSS, Javascript, React JS e Vue.js",
      "Heroku, Firebase e GIT",
      
    ],
  },
  {
    title: "Geração Caldeira",
    company_name: "Instituto Caldeira",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Junho de 2022 - Dezembro de 2022",
    points: [
      "Um dos 50 selecionados entre mais de 2.600 jovens para fazer parte do Programa Geração Caldeira",
      "Participei de palestras, workshops, eventos e formações voltadas aos ramos da inovação, tecnologia e empreendedorismo.",

    ],
  },
  {
    title: "Devs do Agi",
    company_name: "Agi",
    icon: agi,
    iconBg: "#266bff",
    date: "Fevereiro de 2023 - Presente",
    points: [
      "Java, Spring boot e Spring WebFlux",
      "Banco de dados MySQL e MongoDB",
      "Metodologias ágeis ",
      "Kafka e RabbitMQ",
    ],
  },
];



const projects = [
  
  {
    name: "Photo Grid",
    description:
      "O Photo Grid exibe imagens armazenadas em um banco de dados MongoDB em pontos aleatórios da tela, utilizando spring webflux               ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Spring WebFlux",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/LucasGatica/photoGrid",
    yt_video: "https://www.youtube.com/watch?v=ZhLtuVOL4c4"
  },
  {
    name: "ProjEx",
    description:
      "Portfólio de projetos digitais do IFRS produzido durante 2022, feito com React, typescript e Firebase",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/LucasGatica/projex",
    yt_video: "https://projex.digital"
  },
  {
    name: "Oliy",
    description:
      "Site desenvolvido para um projeto em parceria com alunos da ESPM, usando html, css e js puros",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/LucasGatica/Oliy",
    yt_video: "https://lucasgatica.github.io/Oliy/"
  },
  {
    name: "Asimov Cards",
    description:
      "Projeto feito para treinar Javascript durante o desafio de 30 projetos em um mês, usando js e css para expandir os cards ao clique ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: asimov,
    source_code_link: "https://github.com/LucasGatica/Asimov-cards",
    yt_video: "https://lucasgatica.github.io/Asimov-cards/"
  },
  {
    name: "Jogo da Forca",
    description:
      "Jogo da forca criado durante um desafio do Oracle Next Education, Usando html, css e Javascript puros",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: forca,
    source_code_link: "https://github.com/LucasGatica/Challenge-ONE-Sprint-02",
    yt_video: "https://lucasgatica.github.io/Challenge-ONE-Sprint-02/"
  },
  {
    name: "Gerador de imagens",
    description:
      "Gerador de imagens com I.A, utilizando a API do openia para gerar imagens de acordo com o prompt do usuario",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "I.A",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gerador,
    source_code_link: "https://github.com/LucasGatica/gerador",
    yt_video: "https://www.linkedin.com/feed/update/urn:li:activity:7043291216129449984/"
  }
];

export { services, technologies, experiences,  projects };
