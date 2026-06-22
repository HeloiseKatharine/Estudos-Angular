import { Livro } from './components/livro/livro';

export const livros: Livro[] = [
  {
    titulo: 'O Senhor dos Anéis',
    autoria: 'J.R.R. Tolkien',
    favorito: false,
    genero: {id: 'fantasia', value: 'Fantasia', livros: []},
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzvZIs12IlVtqxgYZXJ2pLwYroWGMosfdIXEU1Yx6trmCj8LWHn_SHELDH2ZhQaxkuLd42kg3cm21yf-po66iXe8wxRinSP6yt_wTw5qyiCvPF24CE7ViCX06kNviT4zd&s=10&ec=121657068',
  },
  {
    titulo: '1984',
    autoria: 'George Orwell',
    favorito: true,
    genero: {id: 'distopia', value: 'Distopia', livros: []},
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8n2sXo7l3m1v5Zt6a9j8k5z5sX9gXoQ&usqp=CAU',
  },
  {
    titulo: 'O Pequeno Príncipe',
    autoria: 'Antoine de Saint-Exupéry',
    favorito: false,
    genero: {id: 'fabula', value: 'Fábula', livros: []},
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12JVwx7adUp5hDsR6N55opoonYQN5x4WFp94-PJm2pz1B6ErSMxX_SPR2M9p20VXZTSiH0b6fhi48TpkdQPu_EbQ9GaRmuu73Z3YA1y9S1ks7yWwYAnhKOc8v4vIMrRq0&s=10&ec=121657068',
  },
  {
    titulo: 'A Guerra dos Tronos',
    autoria: 'George R.R. Martin',
    favorito: true,
    genero: {id: 'fantasia', value: 'Fantasia', livros: []},
    imagem:
      'data:image/webp;base64,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',
  },
  {
    titulo: 'O Código Da Vinci',
    autoria: 'Dan Brown',
    favorito: false,
    genero: {id: 'suspense', value: 'Suspense', livros: []},
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8n2sXo7l3m1v5Zt6a9j8k5z5sX9gXoQ&usqp=CAU',
  },
  {
    titulo: 'O Alquimista',
    autoria: 'Paulo Coelho',
    favorito: true,
    genero: {id: 'ficcao', value: 'Ficção', livros: []},
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8n2sXo7l3m1v5Zt6a9j8k5z5sX9gXoQ&usqp=CAU',
  },
  {
    titulo: 'O Hobbit',
    autoria: 'J.R.R. Tolkien',
    favorito: false,
    genero: {id: 'fantasia', value: 'Fantasia', livros: []},
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMOFtORy0uhtLeTAerLIMj-lwBXOWxNvnz_Vcs0Yo9foBw-uP7MUrXlfKym-_FlkDpqHujV-igmx5OrwH5ZHPkiuBAcsQzwb8WxXAz7g54JpiXbk5JJrFug3tnpGqaKEt&s=10&ec=121657068',
  },
  // {
  //   titulo: 'O Morro dos Ventos Uivantes',
  //   autoria: 'Emily Brontë',
  //   favorito: true,
  //   genero: {id: 'romance', value: 'Romance', livros: []},
  //   imagem:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNXGXC4goofcxHXBTMU73jHIYz2FpdcmFDyU6IlQ8FnHO1I_r0hfpgqnv3Y2IfAs0FiwNXZIQ37JYX03RRbaaETfX7I-guvYejMtcS8gYeuje5nC1iC12EPuZ0bawTpg&s=10&ec=121657068',
  // },
  {
    titulo: 'O Grande Gatsby',
    autoria: 'F. Scott Fitzgerald',
    favorito: false,
    genero: {id: 'ficcao', value: 'Ficção', livros: []},
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8n2sXo7l3m1v5Zt6a9j8k5z5sX9gXoQ&usqp=CAU',
  },
];
