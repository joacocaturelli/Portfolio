const icon = (name) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${name}.svg`;

const devIcon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const skillGroups = [
  {
    label: 'Core',
    skills: [
      { name: 'JavaScript', iconUrl: icon('javascript') },
      { name: 'HTML5', iconUrl: icon('html5') },
      { name: 'CSS3', iconUrl: icon('css3') },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', iconUrl: icon('react') },
      { name: 'Redux Toolkit', iconUrl: icon('redux') },
      { name: 'React Router', iconUrl: icon('reactrouter') },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', iconUrl: icon('nodedotjs') },
      { name: 'Express', iconUrl: icon('express') },
      { name: 'REST APIs', iconUrl: devIcon('openapi') },
      { name: 'JWT', iconUrl: icon('jsonwebtokens') },
    ],
  },
  {
    label: 'Data',
    skills: [
      { name: 'PostgreSQL', iconUrl: icon('postgresql') },
      { name: 'MongoDB', iconUrl: icon('mongodb') },
      { name: 'Prisma', iconUrl: icon('prisma') },
    ],
  },
  {
    label: 'Testing & API',
    skills: [
      { name: 'Jest', iconUrl: icon('jest') },
      { name: 'Swagger / OpenAPI', iconUrl: icon('swagger') },
      { name: 'Postman', iconUrl: icon('postman') },
    ],
  },
  {
    label: 'Services & Tools',
    skills: [
      { name: 'Stripe', iconUrl: icon('stripe') },
      { name: 'Cloudinary', iconUrl: icon('cloudinary') },
      { name: 'Netlify', iconUrl: icon('netlify') },
      { name: 'Render', iconUrl: icon('render') },
      { name: 'Git', iconUrl: icon('git') },
      { name: 'GitHub', iconUrl: icon('github') },
    ],
  },
];
