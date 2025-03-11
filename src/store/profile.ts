interface TechStacks {
  [key: string]: string;
}

interface WorkExperience {
  period: string;
  company: string;
  role: string;
  about_project: string;
  main_responsibilities: string[];
  achievements_and_skills_gained: string[];
  tech_stacks: string[];
}

interface DeveloperProfile {
  name: string;
  title: string;
  summary: string;
  tech_stacks: TechStacks;
  working_history: WorkExperience[];
}

const developerProfile: DeveloperProfile = {
  name: "Dương Hứa Toàn (Tony)",
  title: "Full-stack Developer",
  summary: "With 14 years working in the IT industry...",
  tech_stacks: {
    "C#": "14 years",
    "MVC – Web API": "10 years",
    "Entity Framework": "9 years",
    "Angular & AngularJs": "7 years",
    ".NET Core": "8 years",
    "Golang": "2 years",
    "Winform & Devexpress": "6 years",
    "React – Redux": "6 years",
    "Jquery & Javascript": "7 years",
    "MySQL & SQL Server": "14 years",
    "MongoDB": "2 years",
    "Docker": "2.5 years",
    "CI/CD": "3 years",
    "Azure Services": "2 years",
    "Micro-services system structure": "3 years",
    "Software Architecture Design": "5 years",
    "Team Lead role": "6 years"
  },
  working_history: [
    {
      period: "Sep 2023 - Now",
      company: "GIC Singapore - Onsite - Project READER",
      role: "Team Leader, Senior Engineer",
      about_project: "Provide a tool for external EIPs to submit data into internal system...",
      main_responsibilities: [
        "Closely work with BA and QA team to provide system design before sprint start.",
        "Maintain 6-year-old project without any upgrade to the latest tech stack.",
        "Provide a plan and arrange resources for upcoming releases.",
        "Be on-call support for partners when needed.",
        "Support for every release schedule.",
        "Tracing logs & support partners for production issues.",
        "Write Engineer specs for new features.",
        "Preparing the migration plan for integration with new system.",
        "Propose an upgrade plan for all obsolete features.",
        "Be Owner Engineer for every feature that team works on."
      ],
      achievements_and_skills_gained: [
        "Improve client-first mindset.",
        "Redesign & improve the developer team workflow.",
        "Improve leadership and team bonding skills.",
        "Paid a lot of tech debt, restructured a lot of components to keep the code base more human-readable.",
        "Enhance experience on upgrading an extremely obsolete system to the latest stack.",
        "Researching skill in an environment that demands quick adaptation.",
        "Self-taught many tech platforms.",
        "Consolidate knowledge with an enterprise system."
      ],
      tech_stacks: [
        ".NET Framework, .NET Core",
        "Kibana with Elastic search for log",
        "DataDog",
        "Kubernetes",
        "CloudBees",
        "Gitlab CICD"
      ]
    }
  ]
};

export { DeveloperProfile, WorkExperience, TechStacks, developerProfile };
