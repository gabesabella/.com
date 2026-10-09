using _2027_Portfolio.Models;

namespace _2027_Portfolio.Data;

public static class Sections
{
    public static readonly NavSection Intro = new("intro", "About");
    public static readonly NavSection Experience = new("experience", "Experience");
    public static readonly NavSection Projects = new("projects", "Projects");

    public static readonly NavSection Contact = new("contact", "Contact");

    public static readonly NavSection[] All = [Intro, Experience, Projects, Contact];
}