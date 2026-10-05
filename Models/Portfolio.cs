namespace _2027_Portfolio.Models;

public record Job(string Period, string Title, string Description, string[] Tech);

public record Project(
    string Title,
    string Description,
    string[] Tech,
    string? Image = null,
    string? Url = null,
    bool Featured = false);

public record NavSection(string Id, string Label);