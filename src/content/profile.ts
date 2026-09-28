export const profile = {
  name: "Igor Franco",
  fullName: "Igor Vinicius Pimentel Franco",
  role: "Desenvolvedor Full Stack com foco em mobile",
  email: "igorviniciusf10@gmail.com",
  phone: "(21) 97488-5166",
  telephone: "tel:+5521974885166",
  whatsapp: "https://wa.me/5521974885166",
  github: "https://github.com/igorVtermions",
  linkedin: "https://www.linkedin.com/in/igor-vinicius-574657232",
  introduction:
    "React Native no aplicativo. React na web. Node.js no back-end. Sou desenvolvedor Full Stack e gosto de acompanhar o que construo até a entrega.",
  biography: [
    "Meu foco é desenvolvimento mobile com React Native, mas meu trabalho também passa pela web, pelas APIs e pelos dados que conectam tudo.",
    "Atuo como freelancer desde 2023, ano em que concluí Análise e Desenvolvimento de Sistemas na Unopar. Na Thux/Mathux, participei de produtos web e mobile e assumi responsabilidade direta por entregas do time mobile, do desenvolvimento ao lançamento.",
    "Na Mágicos da Limpeza, colaboro na construção de aplicações para uma empresa em Portugal. Também desenvolvo o Escoply, meu SaaS para organizar a rotina de freelancers, atualmente em construção e testes com usuários convidados.",
  ],
} as const;

export const navigation = [
  { label: "Sobre mim", href: "/#sobre" },
  { label: "Stack", href: "/#stack" },
  { label: "Projetos", href: "/projetos" },
  { label: "Minha história", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;

export const mobileNavigation = [
  { label: "Início", href: "/" },
  navigation[2],
  navigation[0],
  { label: "Minha stack", href: "/#stack" },
  navigation[3],
  navigation[4],
];
