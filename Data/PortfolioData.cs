using _2027_Portfolio.Models;

namespace _2027_Portfolio.Data;

public static class PortfolioData
{
    public static readonly Job[] Jobs =
    [
        new("2025—Present", "Full Stack Developer — NHPRI",
            "Built Beacon, a monitoring tool that replaced manual failure-email triage with automated health tracking and real-time alerts — eliminating a standing manual process for the production support team. Independently driving modernization of legacy systems and documenting the work to bring the team out of institutional silos.",
            ["C#", ".NET/Blazor", "DevOps"]),

        new("2023—2025", "Software Engineer — Convention Data Services",
            "Built and maintained .NET integrations for enterprise exhibitors at live events (up to 100k attendees, 110+ countries). Led incident response when a live integration failed mid-event, working directly with the exhibitor's manager through resolution.",
            [".NET/C#", "SQL Server"]),

        new("2020—2023", "Bachelor of Science in Computer Science — WGU",
            "Learned theory, mathematical foundations, and technical execution of computing and software systems.",
            ["Discrete Math", "Data Structures / Algorithms", "Software Development"]),
    ];

    public static readonly Project[] Projects =
    [
        new(Title: "Latest Project: Beacon",
            Description: "Modular systems monitoring dashboard that I poured my heart and soul into. It enables the team to monitor and be notified of issues that would go un-noticed, giving the company real-time, accurate status instead of hand-updated tickets — with alerts anyone can subscribe to. Built out a full admin backend so authorized users can configure additional jobs to monitor.",
            Tech: ["Blazor Server", "Azure Service Bus", "SQLite", "Azure DevOps"],
            Image: "/img/dashboard.png", Featured: true),

        new(Title: "gabesabella.dev (v1)",
            Description: "First version of this portfolio, built in React, Tailwind, and TypeScript. Designed to be a fast, responsive, and visually appealing showcase of my work.",
            Tech: ["React", "Tailwind CSS", "TypeScript", "Email.JS"],
            Image: "/img/portfolio-v1.png", Url: "https://gabesabella-dev.vercel.app/"),

        new(Title: "Showcase Website for Woodworker",
            Description: "Showcase for an independent woodworker — I took all of the photos and built it with React and SCSS.",
            Tech: ["React", "SCSS"],
            Image: "/img/gregsshop.png", Url: "https://gregsshop.vercel.app/"),
        
        new(Title: "silvercord.org",
            Description: "Website for a massage therapist — built in React and SCSS with a calm, client-facing design suited to a wellness practice.",
            Tech: ["React", "SCSS", "Calendly", "Email.JS"],
            Image: "/img/silvercord.png", Url: "https://www.silvercord.org/"),
        
        new(Title: "Obligatory TODO App",
            Description: "The standard rite of passage — kept here deliberately, warts and all, as a baseline against the rest of the work.",
            Tech: ["React", "TypeScript", "Tailwind CSS"],
            Image: "/img/todo.png", Url: "https://todo-pi-nine.vercel.app/"),

        new(Title: "CSS-Only Resume",
            Description: "Early project, hand-built in raw HTML/CSS before frameworks entered the picture. Kept as-is as a marker of the starting point.",
            Tech: ["HTML", "CSS"],
            Image: "/img/oldschool.png", Url: "https://gabesresume.vercel.app/"),

        new(Title: "RightFlight",
            Description: "UI-only workshop project — no backend, built purely to practice layout, spacing, and visual design decisions in HTML/CSS.",
            Tech: ["HTML", "CSS"],
            Image: "/img/rightflight.png", Url: "https://rightflight.vercel.app/"),
    ];
}