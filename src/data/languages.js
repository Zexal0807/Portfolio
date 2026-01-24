import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiDocker,
    SiTailwindcss,
    SiNextdotjs,
    SiPhp,
    SiNeo4J,
    SiSqlite,
    SiMysql,
    SiWordpress
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Database } from "lucide-react";

const DATA = {
    NEXTJS: { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", bgColor: "rgba(255, 255, 255, 0.1)", tagClasses: "" },
    JAVASCRIPT: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", bgColor: "rgba(247, 223, 30, 0.1)", tagClasses: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    REACT: { name: "React", icon: SiReact, color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.1)", tagClasses: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
    REACT_NATIVE: { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.1)", tagClasses: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    TYPESCRIPT: { name: "TypeScript", icon: SiTypescript, color: "#3178C6", bgColor: "rgba(49, 120, 198, 0.1)", tagClasses: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    NODEJS: { name: "Node.js", icon: SiNodedotjs, color: "#339933", bgColor: "rgba(51, 153, 51, 0.1)", tagClasses: "bg-green-500/20 text-green-400 border-green-500/30" },
    SQLITE: { name: "Sqlite", icon: SiSqlite, color: "#57B1E3", bgColor: "rgba(97, 218, 251, 0.1)", tagClasses: "" },
    MYSQL: { name: "MySql", icon: SiMysql, color: "#DC8700", bgColor: "rgba(247, 223, 30, 0.1)", tagClasses: "" },
    POSTGRESQL: { name: "PostgreSQL", icon: SiPostgresql, color: "#2F5E8D", bgColor: "rgba(120, 150, 251, 0.1)", tagClasses: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
    MONGODB: { name: "MongoDB", icon: SiMongodb, color: "#47A248", bgColor: "rgba(71, 162, 72, 0.1)", tagClasses: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    NEO4J: { name: "Neo4J", icon: SiNeo4J, color: "#FFFFFF", bgColor: "rgba(255, 255, 255, 0.1)", tagClasses: "" },
    REST_API: { name: "REST API", icon: Database, color: "#FF6B6B", bgColor: "rgba(255, 107, 107, 0.1)", tagClasses: "" },
    PHP: { name: "PHP", icon: SiPhp, color: "#F05032", bgColor: "rgba(240, 80, 50, 0.1)", tagClasses: "" },
    GIT: { name: "Git", icon: SiGit, color: "#F05032", bgColor: "rgba(240, 80, 50, 0.1)", tagClasses: "" },
    DOCKER: { name: "Docker", icon: SiDocker, color: "#2496ED", bgColor: "rgba(36, 150, 237, 0.1)", tagClasses: "" },
    TAILWINDCSS: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", bgColor: "rgba(6, 182, 212, 0.1)", tagClasses: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    WORDPRESS: { name: "WordPress", icon: SiWordpress, color: "#06B6D4", bgColor: "rgba(6, 182, 212, 0.1)", tagClasses: "bg-blue-500/20 text-blue-400 border-blue-500/30" }
}


// const tagColors = {
//     Database: "bg-slate-500/20 text-slate-400 border-slate-500/30",
//     MongoDB: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
//     PostgreSQL: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
//     API: "bg-orange-500/20 text-orange-400 border-orange-500/30",
//     "UI/UX": "bg-pink-500/20 text-pink-400 border-pink-500/30",
// };


let skills = { ...DATA };
Object.entries(skills).forEach(([k, v]) => {
    skills[k] = {
        name: v.name,
        icon: v.icon,
        color: v.color,
        bgColor: v.bgColor
    }
})

export const SKILLS = skills;

let tags = { ...DATA };
Object.entries(skills).forEach(([k, v]) => {
    tags[k] = {
        name: v.name,
        tagClasses: v.tagClasses
    }
})
export const TAGS = tags;

