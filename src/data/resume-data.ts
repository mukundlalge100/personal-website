import type { ResumeData, NavItem } from '../types/resume';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const RESUME_DATA: ResumeData = {
  personal: {
    name: 'Mukund Lalge',
    title: 'Software Engineer',
    phone: '+91-8999186973',
    email: 'mukundlalge100@gmail.com',
    location: 'Punawale, Pune - 411033',
    linkedin: 'https://linkedin.com/in/mukundlalge',
    github: 'https://github.com/mukundlalge',
    summary:
      'Experienced Full Stack Developer with 7+ years of expertise building scalable, production-grade applications across frontend and backend systems. Proven in leveraging LLM-assisted development and AI-accelerated workflows to solve complex problems, deliver high-quality solutions faster, and drive innovation in regulated, high-impact domains. A collaborative engineer who thrives in cross-functional teams to maximize efficiency, reliability, and user experience.',
  },

  skills: [
    {
      category: 'Backend',
      items: [
        'Java 8+',
        'Spring Boot',
        'Spring Framework',
        'Spring WebFlux',
        'Vert.x',
        'Microservices',
        'Spring Cloud',
        'NodeJS',
        'ExpressJS',
      ],
    },
    {
      category: 'Frontend',
      items: [
        'ReactJS',
        'TypeScript',
        'Redux',
        'Redux Saga',
        'Redux Toolkit',
        'HTML5',
        'CSS3',
        'SASS/LESS',
        'Webpack',
        'D3.js',
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'AWS (Lambda, EC2, Step Functions, IAM)',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'GitLab Pipelines',
        'GitHub',
        'BitBucket',
      ],
    },
    {
      category: 'Messaging & Data',
      items: [
        'Apache Kafka',
        'RabbitMQ',
        'GraphQL',
        'REST API',
        'SQL Databases',
        'MongoDB',
        'Oracle',
        'Redis',
      ],
    },
    {
      category: 'Testing & Monitoring',
      items: [
        'JUnit 5',
        'Mockito',
        'Jest',
        'RTL',
        'Storybook',
        'K6',
        'JMeter',
        'Grafana',
        'Prometheus',
        'OpenTelemetry',
      ],
    },
    {
      category: 'AI & Innovation',
      items: [
        'LLM-Driven Development',
        'Vibe Coding',
        'Windsurf',
        'GitHub Copilot',
        'ChatGPT',
        'Regulated AI Engineering',
      ],
    },
  ],

  experience: [
    {
      id: 'athenahealth',
      role: 'Member Of Technical Staff',
      company: 'AthenaHealth Technology Private Limited',
      location: 'Pune, Maharashtra',
      period: "Jun '22 – Present",
      highlights: [
        'Developed Spring Boot applications utilising microservices architecture with Docker, Spring Cloud Config, Bus, Function, and Streams.',
        'Utilized Kubernetes for container orchestration and implemented RabbitMQ and Apache Kafka as messaging systems.',
        'Designed and implemented efficient backend services using Vert.x and Java 17 to optimize asynchronous programming.',
        'Led cross-functional teams in the design and implementation of client requirements for real-world applications.',
        'Ensured code quality by writing automated API and contract test cases.',
        'Developed unit test cases for asynchronous APIs using the Vert.x library, achieving over 90% code coverage.',
        'Leveraged Spring WebFlux and asynchronous programming to develop responsive and scalable web applications.',
        'Contributed to the Chart Sync Admin React page deployed to production using ReactJS Hooks, Redux Toolkit, Storybook, RTL, and SASS.',
      ],
      achievements: [
        'Led end-to-end ownership of a large-scale Clinical Content Framework, implementing complex scoring logic, dynamic question components, FileCloud S3 image uploads, and zero-downtime API migrations.',
        'Drove platform stability and performance at scale, optimizing critical APIs (up to 80% latency reduction), resolving high-severity production issues.',
        'Architected and delivered a clinical-grade Pediatric Growth Chart platform using LLM-assisted development (Windsurf), implementing CDC Extended BMI, WHO–CDC gradual transition, and gestational age correction algorithms.',
        'Led end-to-end full-stack development with TypeScript, React, and D3.js, delivering high-performance pediatric growth visualizations with 80%+ unit test coverage.',
        'Performed performance and load testing for EDS service APIs using K6 and JMeter tools.',
      ],
    },
    {
      id: 'epam',
      role: 'Software Engineer A2',
      company: 'EPAM Systems',
      location: 'Pune, Maharashtra',
      period: "Dec '21 – Jun '22",
      highlights: [
        'Developed Banking Services Backend using Java with Spring Boot, designing efficient and scalable solutions.',
        'Utilized Java 8, Spring Boot, and Data JPA to build AWS serverless applications leveraging Lambda functions.',
        'Gained hands-on experience with AWS services including Lambda, EC2, Step Functions, and IAM.',
        'Implemented GraphQL as the query language for APIs in both ReactJS and Spring Boot with Redux Saga and GitLab Pipelines.',
        'Developed highly performant, scalable Step Functions and Lambda functions for server-side development.',
        'Established unit testing frameworks using React Testing Library, achieving 85% test coverage.',
        'Configured JUnit 5 and Mockito for testing applications, attaining 80% test coverage.',
      ],
      achievements: [
        'Recognized as Sprint Hero and awarded "Pat on the Back" badges from EPAM, along with client appreciation.',
      ],
    },
    {
      id: 'infosys',
      role: 'Full Stack Developer (Senior Operation Executive)',
      company: 'Infosys Private Limited',
      location: 'Pune, Maharashtra',
      period: "Jun '19 – Dec '21",
      techStack: ['Java', 'Spring Boot', 'ReactJS', 'Redux Saga', 'SASS', 'Oracle', 'SQL'],
      highlights: [
        'Collaborated with cross-functional teams to design and implement client requirements for UBS Financial Services.',
        'Minimized third-party dependencies by developing custom components, resulting in reduced bundle size.',
        'Developed backend APIs using Java 8, Spring Boot, Data JPA, and Hibernate.',
        'Utilized GraphQL as the query language for APIs in both ReactJS and Spring Boot applications.',
        'Set up ReactJS from scratch, configuring Webpack with various profiles, Redux, Redux Saga, and React Router.',
        'Executed SEO pre-rendering using Spring Boot with Freemarker and implemented meta tags in ReactJS.',
        'Built CI/CD pipelines in GitLab for snapshot and release versions, deploying artifacts to Nexus.',
        'Enhanced application performance through multi-threading and CompletableFuture Java API.',
        'Played a key role in setting up caching logic using Redis, achieving 99% customer satisfaction.',
        'Implemented data security measures for APIs using OAuth2 and JWT-based authorization.',
      ],
      achievements: [
        'Received the Insta Award from Infosys and client recognition for exceptional performance.',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor in Computer Science',
      institution: 'Dr. DY Patil ACS College, Pimpri',
      location: 'Pune, Maharashtra',
      period: "Apr '16 – Apr '19",
      score: '80.86%',
      highlights: [
        'Awarded 1st Prize in college for the development of the Developer Connector Project utilizing MERN stack technology.',
      ],
    },
  ],

  projects: [
    {
      id: 'burger-builder',
      name: 'Burger Builder',
      period: "Jan '19 – Jun '19",
      location: 'Pune, Maharashtra',
      description:
        'Developed a web application using MERN stack technology, deployed on Firebase Hosting. The application allows users to log in, sign up, and reset their passwords via email links. Users can also add ingredients, place orders, and view their order history.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
      liveUrl: '#',
    },
  ],

  hobbies: [
    { icon: '✈️', label: 'Traveling & Exploring' },
    { icon: '🚴', label: 'Cycling & Running' },
    { icon: '🎬', label: 'Movies & Series' },
  ],
};
