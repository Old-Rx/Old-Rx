<!-- OLD-RX // RX-DEVELOPMENT // APEX NEXUS -->
<div align="center">

<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/apex-hero.svg" alt="Old-Rx Apex Nexus Hero"/>

<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/rx-builder.svg" alt="RX Builder Minigame"/>

<img src="https://img.shields.io/badge/PLAYER-OLD--RX-05060a?style=for-the-badge&labelColor=ff304f&color=05060a"/>
<img src="https://img.shields.io/badge/CODENAME-RX--DEVELOPMENT-05060a?style=for-the-badge&labelColor=42b8ff&color=05060a"/>
<img src="https://img.shields.io/badge/PROTOCOL-APEX%20NEXUS-05060a?style=for-the-badge&labelColor=a90024&color=05060a"/>
<img src="https://img.shields.io/badge/STATE-ONLINE-05060a?style=for-the-badge&labelColor=1d6f9f&color=05060a"/>

<br/><br/>

<a href="https://github.com/Old-Rx?tab=repositories"><img src="https://img.shields.io/badge/ENTER%20REPOSITORIES-ff304f?style=for-the-badge&logo=github&logoColor=white"/></a>
<a href="https://github.com/Old-Rx/rx-msg"><img src="https://img.shields.io/badge/CURRENT%20BUILD-rx--msg-42b8ff?style=for-the-badge&logo=github&logoColor=white"/></a>

</div>

---

# `APEX://IDENTITY`

<div align="center">
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/identity-hud.svg" alt="Identity HUD"/>
</div>

**Old-Rx** is the profile identity behind **RX-Development**. The design is intentionally **red-first with a smaller blue systems accent**: red carries the main energy and blue is reserved for data, signals, movement, infrastructure and secondary HUD elements.

> **Understand → Design → Build → Test → Debug → Deploy → Observe → Improve**

The core profile visuals are local SVG files in this repository. That avoids the main failure mode of the earlier version: malformed or fragile externally generated visual panels.

## `QUICK NAVIGATION`

<div align="center">

[Architecture](#01--architecture) • [Technology Map](#02--technology-map) • [Engineering Core](#03--engineering-core) • [Current Build](#04--current-public-build) • [Delivery](#05--delivery--quality) • [Production](#06--production-mode) • [Mission Board](#07--mission-board)

</div>

---

# `01 // ARCHITECTURE`

<div align="center">
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/tech-universe.svg" alt="Tech Universe"/>
</div>

The profile treats software as a system of responsibilities rather than one giant stack. **Frontend** turns state into a user experience. **Backend** protects and executes business logic. **Data** persists truth and accelerates hot paths. **DevOps** turns code into an observable production runtime.

```text
CLIENT → API → DATA → RUNTIME → OBSERVABILITY
```

The point is not to use every technology in every project. The point is to know **which layer owns which problem**.

---

# `02 // TECHNOLOGY MAP`

> The icons below are categorized by purpose. They are an ecosystem map, not an equal-expertise claim for every item.

## `FRONTEND // USER INTERFACE LAYER`

<div align="center">
<img src="https://skillicons.dev/icons?i=html,css,sass,js,ts,react,nextjs,vue,nuxtjs,angular,svelte,tailwind,bootstrap,materialui,redux,vite,webpack,threejs&theme=dark&perline=9" alt="Frontend technologies"/>
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/frontend-flow.svg" alt="Frontend Flow"/>
</div>

**What this category is for:** pages, forms, navigation, components, application state, animations, responsive layout, browser data fetching and final visual rendering.

- **HTML / CSS / Sass** — structure, semantics, responsive layout and visual styling.
- **JavaScript / TypeScript** — interaction, browser logic and type safety for larger applications.
- **React / Vue / Angular / Svelte** — component-driven interface architecture.
- **Next.js / Nuxt** — higher-level application frameworks with routing, rendering and server features.
- **Tailwind / Bootstrap / Material UI** — UI systems, utilities and reusable components.
- **Redux** — predictable shared application state.
- **Vite / Webpack** — build pipelines, modules and asset bundling.
- **Three.js** — browser-based 3D graphics.

## `BACKEND // API & BUSINESS LOGIC`

<div align="center">
<img src="https://skillicons.dev/icons?i=nodejs,express,nestjs,php,laravel,symfony,python,django,flask,fastapi,java,spring,cs,dotnet,go,rust,ruby,rails,graphql&theme=dark&perline=10" alt="Backend technologies"/>
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/backend-flow.svg" alt="Backend Flow"/>
</div>

**What this category is for:** APIs, authentication, permissions, validation, business rules, integrations, background work and access to storage systems.

- **Node.js / Express / NestJS** — JavaScript/TypeScript servers from minimal REST APIs to structured service applications.
- **PHP / Laravel / Symfony** — mature server-side web application ecosystems.
- **Python / Django / Flask / FastAPI** — APIs, automation and web services with different levels of structure.
- **Java / Spring** — strongly structured JVM services and enterprise systems.
- **C# / .NET** — application and service platforms across Microsoft and cross-platform environments.
- **Go / Rust** — efficient services, infrastructure tooling and performance-sensitive server workloads.
- **Ruby / Rails** — convention-driven application development.
- **GraphQL** — schema-driven API querying.

## `DATABASES // STORAGE, CACHE & REALTIME`

<div align="center">
<img src="https://skillicons.dev/icons?i=mysql,postgres,mongodb,redis,sqlite,firebase,supabase&theme=dark&perline=7" alt="Database technologies"/>
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/data-engine.svg" alt="Data Engine"/>
</div>

**What this category is for:** durable application state, transactions, flexible documents, caching, sessions and realtime backend capabilities.

- **MySQL / PostgreSQL** — relational truth, transactions, constraints and SQL querying.
- **MongoDB** — document-oriented storage for flexible shapes.
- **Redis** — cache, sessions, temporary state and queue-like patterns.
- **SQLite** — embedded relational storage with almost no setup.
- **Firebase / Supabase** — managed backend services that reduce infrastructure setup.

## `SYSTEMS // LOW-LEVEL & PERFORMANCE`

<div align="center">
<img src="https://skillicons.dev/icons?i=c,cpp,rust,go,bash,powershell,haskell&theme=dark&perline=7" alt="Systems technologies"/>
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/systems-core.svg" alt="Systems Core"/>
</div>

## `MOBILE + CLOUD // CLIENTS & RUNTIME`

<div align="center">
<img src="https://skillicons.dev/icons?i=flutter,dart,kotlin,swift,aws,azure,gcp,cloudflare,vercel,netlify&theme=dark&perline=10" alt="Mobile and cloud technologies"/>
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/mobile-cloud.svg" alt="Mobile and Cloud Matrix"/>
</div>

## `DEVOPS // BUILD, SHIP & OBSERVE`

<div align="center">
<img src="https://skillicons.dev/icons?i=linux,ubuntu,debian,docker,kubernetes,nginx,githubactions,jenkins,terraform,ansible,prometheus,grafana&theme=dark&perline=6" alt="DevOps technologies"/>
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/devops-pipeline.svg" alt="DevOps Pipeline"/>
</div>

## `TOOLING // DEVELOPMENT WORKBENCH`

<div align="center">
<img src="https://skillicons.dev/icons?i=git,github,gitlab,vscode,visualstudio,idea,phpstorm,pycharm,postman,figma,npm,yarn,pnpm,bun,maven,gradle,cmake&theme=dark&perline=9" alt="Development tools"/>
</div>

---

# `03 // ENGINEERING CORE`

<div align="center">
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/security-grid.svg" alt="Security Grid"/>
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/quality-lab.svg" alt="Quality Lab"/>
</div>

### `Architecture before complexity`
Keep boundaries obvious. UI code should not silently become database code, business logic should not depend on presentation details, and deployment should be reproducible.

### `Performance is a system property`
Performance includes bundle size, rendering cost, network latency, database query shape, indexes, cache strategy, CPU, memory and concurrency.

### `Security belongs inside the architecture`
Validation, authentication, authorization, safe defaults, secret handling and observability should be built into the request path and deployment model.

### `Debug with evidence`
Reproduce the failure, reduce variables, capture logs, isolate the smallest cause, patch the smallest safe scope and verify the behavior again.

---

# `04 // CURRENT PUBLIC BUILD`

<div align="center">
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/project-radar.svg" alt="Current Project Radar"/>
<a href="https://github.com/Old-Rx/rx-msg"><img src="https://img.shields.io/badge/OPEN%20Old--Rx%2Frx--msg-42b8ff?style=for-the-badge&logo=github&logoColor=white"/></a>
</div>

```text
REPOSITORY     : Old-Rx/rx-msg
VISIBILITY     : Public
PRIMARY SIGNAL : Haskell
DEFAULT BRANCH : main
PROFILE ROLE   : Current public build
```

The technology map is intentionally broader than the current repository. This section separates **real current project evidence** from the broader categorized ecosystem.

---

# `05 // DELIVERY & QUALITY`

<div align="center">
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/observability.svg" alt="Observability Console"/>
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/commit-hunter.svg" alt="Commit Hunter"/>
</div>

A production-ready loop is not finished at `git push`:

```text
COMMIT → TEST → BUILD → DEPLOY → ROUTE → OBSERVE → IMPROVE
```

The local animated commit scene deliberately avoids the generated contribution-snake workflow that caused broken-image problems earlier.

---

# `06 // PRODUCTION MODE`

<div align="center">
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/production-boss.svg" alt="Production Boss"/>
</div>

```text
PHASE 1  The local build works.
PHASE 2  Production configuration differs.
PHASE 3  Real traffic reaches paths you did not simulate.
PHASE 4  Logs expose edge cases.
PHASE 5  Patch, verify, observe and stabilize.
```

**Victory condition:** the system remains understandable when something goes wrong.

---

# `07 // MISSION BOARD`

<div align="center">
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/mission-board.svg" alt="Mission Board"/>
</div>

Current profile direction:

- maintain a distinctive **Old-Rx / RX-Development** identity
- keep **red dominant** and use blue as a smaller technical accent
- make the important visual system **local and self-contained**
- organize technologies by **role**, not by random icon density
- prioritize **real repositories and documentation** over fake expertise signals
- expand the project showcase as the public repository network grows

---

<div align="center">
<img width="100%" src="https://raw.githubusercontent.com/Old-Rx/Old-Rx/main/assets/apex/apex-footer.svg" alt="Apex Footer"/>
</div>
