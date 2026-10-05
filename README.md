# gabesabella.dev

My portfolio, rebuilt in Blazor WebAssembly because I wanted somewhere
to put the ideas that don't fit in a ticket. Totally normal reason.

**Live:** https://www.gabesabella.dev

## Stack

- **.NET 10 / Blazor WebAssembly**: the whole site runs in the browser
- **SASS** (via `AspNetCore.SassCompiler`): a hand-rolled, Tailwind-style
  utility layer in `Styles/`
- **JavaScript interop**: a section-aware nav highlight and a terminal
  boot screen, because a loading spinner would have been too sensible
- **Vercel** for hosting, deployed from GitHub Actions

## Run it locally

Requires the [.NET 10 SDK](https://dotnet.microsoft.com/download).

```bash
git clone https://github.com/gabesabella/.com.git
cd .com
dotnet run
```

SASS compiles automatically on build (`sasscompiler.json` maps `Styles/`
to `wwwroot/css/`).

## Build and deploy

```bash
./build.sh
```

This installs the SDK, runs `dotnet publish -c Release`, and copies
`release/wwwroot/*` into `public/` for Vercel.

## Project layout

```
Components/Pages/        Home page and its section components
Components/Pages/comps/  Header, Intro, Experience, Projects, etc.
Styles/                  SASS: base, utilities, components
wwwroot/                 index.html, JS, images, compiled CSS
```

## Lessons learned the hard way

**Green CI does not mean a working site.** The deploy succeeded and the
site was blank. .NET 10 fingerprints WASM assets (`dotnet.<hash>.js`),
and `index.html` needs `<script type="importmap"></script>` for the
browser to resolve them. Without it: a 404 on `dotnet.js` and a very
quiet portfolio.

## Roadmap

A running list of things I'm refactoring in public, in no particular
order, with no approval process:

- [ ] Remove leftover Blazor Web App template files
- [ ] Fix the carousel component that renders itself
- [ ] Clean up the SASS and the font import
- [ ] Add a contact form

## Contact

Open to the right team. If that's yours, I'd like to hear from you.
