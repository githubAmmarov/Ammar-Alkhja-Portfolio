export const portfolioData = {
  personal: {
    name: "Mohammad Ammar Alkhja",
    title: "Backend Developer | Full-Stack Developer",
    email: "Ammoooralkhja@gmail.com",
    phone: "+963995867181",
    location: "Damascus, Syrian Arab Republic",
    summary: "Backend Developer | Software Engineering Student with more than 2 years experience in designing and developing scalable web applications using Laravel and PHP. Skilled in RESTful API development, database design, and third-party integrations. Strong understanding of SOLID principles, OOP, and clean coding practices.",
    github: "https://github.com/githubAmmarov",
    linkedin: "https://www.linkedin.com/in/mohammad-ammar-alkhja",
  },

  skills: {
    softSkills: [
      "Communication skills",
      "Flexibility",
      "Ambition",
      "Humility",
      "Analytical",
      "Problem-Solving",
      "Deadline Handling",
      "Continuous Learning",
    ],
    technical: [
      {
        category: "Backend Development",
        items: ["Laravel", "PHP", "RESTful APIs", "SOLID Principles"],
      },
      {
        category: "Web Technologies",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js"],
      },
      {
        category: "Database Management",
        items: ["MySQL", "SQL Server", "Database Design & Optimization"],
      },
      {
        category: "Version Control & Deployment",
        items: ["Git", "GitHub", "GitLab"],
      },
    ],
    technologies: [
      {
        name: "Laravel",
        icon: "https://laravel.com/img/logomark.min.svg",
        category: "Backend",
      },
      {
        name: "PHP",
        icon: "https://www.php.net/images/logos/new-php-logo.svg",
        category: "Backend",
      },
      {
        name: "React",
        icon: "https://react.dev/images/og-react.png",
        category: "Frontend",
      },
      {
        name: "JavaScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
        category: "Frontend",
      },
      {
        name: "TypeScript",
        icon: "https://www.typescriptlang.org/images/typescript-logo.svg",
        category: "Frontend",
      },
      {
        name: "MySQL",
        icon: "https://www.mysql.com/common/logos/logo-mysql-170x100.png",
        category: "Database",
      },
      {
        name: "Git",
        icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        category: "Tools",
      },
      {
        name: "NestJS",
        icon: "https://nestjs.com/img/logo-small.svg",
        category: "Backend",
      },
      {
        name: "Java",
        icon: "https://www.java.com/favicon.ico",
        category: "Backend",
      },
    ],
  },

  experience: [
    {
      title: "ERP System Customization Specialist",
      company: "Digit Innovation Center",
      location: "Damascus, Al-Mazza",
      description: [
        "Led the customization and implementation of ERPNext to streamline operations and meet the specific business needs of the innovation center.",
        "Customized core modules (e.g., HR, Projects, Inventory) by modifying DocTypes, scripts, and workflows to enhance functionality and user experience.",
        "Designed and developed new custom modules from scratch to address unique operational requirements not covered by the standard system.",
        "Gained deep, hands-on experience with the Frappe framework, NestJS, and JavaScript to deliver a tailored ERP solution that improved organizational efficiency.",
      ],
      technologies: ["ERPNext", "Frappe", "NestJS", "JavaScript"],
    },
  ],

  projects: [
    {
      title: "Compiler for Angular framework",
      description:
        "Built a complete compiler for a custom Angular-inspired template language using Java and ANTLR4. Implemented lexer, parser, AST, symbol table, semantic analysis, and JavaScript code generation.",
      technologies: ["Java", "ANTLR4", "Compiler Design"],
      github: "https://github.com/githubAmmarov/Angular-Compiler",
      highlights: [
        "Complete compiler implementation",
        "Lexer, parser, and AST generation",
        "JavaScript code generation",
      ],
    },
    {
      title: "Console Game with Search Algorithms",
      description:
        "Designed and developed a console-based simulation of the Light Links puzzle game. Implemented and compared the performance of various search algorithms including BFS, DFS, UCS, Hill Climbing, and A* to autonomously solve complex puzzle states.",
      technologies: ["Java", "Algorithms", "OOP"],
      github: "https://github.com/githubAmmarov/Search-Algorithms-project",
      highlights: [
        "Multiple search algorithm implementations",
        "Performance comparison analysis",
        "Heuristic design and pathfinding",
      ],
    },
    {
      title: "School Management System – Frontend",
      description:
        "Developed the frontend for a comprehensive School Management System using React.js. Engineered a responsive and dynamic UI with Material-UI, implementing role-based views for administrators, teachers, and students.",
      technologies: ["React.js", "Redux Toolkit", "Material-UI", "Axios"],
      github: "https://github.com/githubAmmarov/School-management-system",
      highlights: [
        "Responsive UI design",
        "Role-based access control",
        "State management with Redux",
        "React Router implementation",
      ],
    },
    {
      title: "Events Management System",
      description:
        "Designed and developed a custom database for the application. Implemented the back-end considering the variety of user roles and disparity of permissions between them, ensuring scalability and efficiency. Applied SOLID principles to write clean, maintainable, and modular code.",
      technologies: ["Backend", "Database Design", "SOLID Principles"],
      github: "https://github.com/githubAmmarov/Events-Management-System-Backend-Project",
      highlights: [
        "Custom database design",
        "Role-based permissions",
        "SOLID principles implementation",
      ],
    },
    {
      title: "Pharmacy Warehouse Management System",
      description:
        "Designed and implemented a comprehensive inventory management system for a pharmacy warehouse, allowing for user roles, stock control, expiry date tracking, and automated order processing.",
      technologies: ["Inventory Management", "Database", "Backend"],
      github: "https://github.com/githubAmmarov/Pharmacy_Warehouse_Mangement_system",
      highlights: [
        "Inventory management system",
        "Stock control and tracking",
        "Expiry date management",
        "Automated order processing",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor degree of Information Technology / Software Engineering",
      school: "Damascus University",
      location: "Syria",
      year: "2025",
    },
  ],

  involvement: [
    {
      title: "Volunteer - Operations Team",
      organization: "University of Damascus",
      description:
        "Served as a key volunteer in the operations team for two of Syria's premier inter-university programming competitions, DCPC and SCPC. Contributed to the seamless execution of event logistics, participant coordination, and on-site problem-solving.",
      period: "Ongoing",
    },
    {
      title: "Fundraising",
      organization: "Eafaf Charity association",
      description:
        "Collaborated with donors and community members to raise awareness and collect donations.",
      period: "June 2022 - August 2022",
    },
  ],
};
