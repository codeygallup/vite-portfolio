interface TechCategory {
  label: string;
  skills: string[];
  icons: string[];
}

export const techCategories: TechCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "Kotlin"],
    icons: ["js", "ts", "java", "py", "kotlin"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Grafana", "Postman", "VS Code", "IntelliJ IDEA", "Jira"],
    icons: ["git", "github", "grafana", "postman", "vscode", "idea", "jira"],
  },
  {
    label: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
    icons: ["mysql", "mongodb", "postgres"],
  },
  {
    label: "Testing & CI/CD",
    skills: ["Jenkins", "Gherkin", "Karate"],
    icons: ["jenkins", "gherkin", "karate"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Tailwind CSS", "Vite", "Node.js", "Express", "Spring Boot", "Vue 3"],
    icons: ["react", "tailwind", "vite", "nodejs", "express", "spring", "vue"],
  },
];