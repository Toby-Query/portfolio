<script lang="ts">
    import { scrollReveal } from '$lib/actions/scrollReveal';
    import Tag from '$lib/components/Tag.svelte';
    import SketchHeading from '$lib/components/SketchHeading.svelte';
    import SketchBox from '$lib/components/SketchBox.svelte';
    import { MEDIUM_PROFILE } from '$lib/medium';

    // Articles are pulled from the Medium RSS feed at build time (see +page.server.ts).
    let { data } = $props();

    const WRITING_INTRO =
        'I write on Medium about the things I fall down rabbit holes over — language design, runtimes, physics, and the occasional "what if we actually built that?".';

    const EXPERIENCE = [
        {
            title: 'EXPERIENCE: BBD',
            role: 'Software Engineer',
            period: '2025 - Present',
            focus: 'Building cross-platform mobile applications with React Native and Expo. Architecting modern web solutions using Next.js, SolidJS, and 11ty. Leveraging Grafana for monitoring and Azure/AWS for cloud infrastructure.',
            tags: ['REACT NATIVE', 'EXPO', 'NEXT.JS', 'AZURE', 'AWS'],
            color: 'red'
        },
        {
            title: 'EDUCATION: WITS (HONOURS)',
            role: 'BSc Honours in Computer Science',
            period: '2026 - Present',
            focus: 'Specializing in Robotics, High Performance Computing, Cybersecurity, and AI/Machine Learning.',
            tags: ['ROBOTICS', 'HPC', 'CYBERSECURITY', 'AI/ML'],
            color: 'green'
        },
         {
            title: 'EXPERIENCE: WITS (CS TUTOR)',
            role: 'Computer Science Tutor',
            period: '2026 - Present',
            focus: 'Tutoring undergraduate students at the University of the Witwatersrand in core computer science modules. Supporting students with concepts in algorithms, data structures, and programming fundamentals.',
            tags: ['OPERATING SYSTEMS', 'DATABASES', 'NETWORKS', 'GRAPHICS'],
            color: 'green'
        },
        {
            title: 'COMMUNITY: WITS CYBERSECURITY INTEREST GROUP',
            role: 'Organising Team',
            period: '2026 - Present',
            focus: 'Part of the team that runs the cybersecurity interest group at the University of the Witwatersrand, organising sessions and activities for students getting into security.',
            tags: ['CYBERSECURITY', 'COMMUNITY'],
            color: 'blue'
        }
    ];

    const SANDY_GIFT = {
        tagline: 'Gift giving for the rest of us.',
        description: 'Sandy Gift takes the guesswork out of gift-giving. Share a wishlist of things you actually want — friends and family can quietly "dibs" items so every gift lands perfectly. No duplicates. No awkward returns. Just the right gift, every time.',
        role: 'Founder & Engineer',
        founded: '2026',
        status: 'LIVE',
        link: 'https://sandygift.app'
    };

    const PROJECTS = [
        {
            name: 'CRASHAI',
            year: '2026',
            language: 'PYTHON',
            description:
                'Your car can brake each wheel on its own; you can\'t. A neural network takes over in the last second before a crash, steering and braking each wheel separately, and halves crashes compared with a scripted swerve.',
            tags: ['PYTHON', 'REINFORCEMENT LEARNING', 'SIMULATION', 'AUTOMOTIVE'],
            link: 'https://github.com/Mukhunyeledzi-Muthuphei/CrashAI'
        },
        {
            name: 'WCU — WITS CUDA EMULATOR',
            year: '2026',
            language: 'C',
            description:
                'Learning CUDA shouldn\'t require owning a GPU. Runs CUDA C on any Mac or Linux machine and names the thread and source line behind every race and out-of-bounds write.',
            tags: ['C', 'CUDA', 'COMPILERS', 'HPC'],
            link: 'https://github.com/Mukhunyeledzi-Muthuphei/wits-cuda-emulator'
        },
        {
            name: 'GIVE ME BACK MY SCREENSHOT',
            year: '2026',
            language: 'SWIFT',
            description:
                'macOS drops your screenshot on the desktop, not the clipboard, so pasting one means going to find it first. This puts every new screenshot on the clipboard — ⌘V just works.',
            tags: ['SWIFT', 'MACOS', 'APPKIT'],
            link: 'https://github.com/Mukhunyeledzi-Muthuphei/give-me-back-my-screenshot'
        },
        {
            name: 'PENTESTKIT',
            year: '2026',
            language: 'SVELTE / PYTHON',
            description:
                'Basic recon means juggling nmap, dig, whois, nikto and gobuster across a pile of terminal tabs. This puts them behind one web UI, with scan output streaming live.',
            tags: ['SVELTEKIT', 'FASTAPI', 'DOCKER', 'CYBERSECURITY'],
            link: 'https://github.com/wits-cybersecurity-admin/pentester'
        },
        {
            name: 'QUOTES API',
            year: '2026',
            language: 'JAVASCRIPT',
            description:
                'I am a lover of wisdom, and this is the wisdom I have collected over the years. It serves the whole collection as JSON from a Google Sheet I keep adding to, so a new quote never needs a deploy.',
            tags: ['JAVASCRIPT', 'SERVERLESS', 'VERCEL', 'REST API'],
            link: 'https://github.com/Toby-Query/quotes-api'
        },
        {
            name: 'CHROMA TUI',
            year: '2025',
            language: 'PYTHON',
            description:
                'Peeking inside a ChromaDB instance usually means writing throwaway Python. This browses collections, documents, metadata and embeddings from the terminal.',
            tags: ['PYTHON', 'TUI', 'CHROMADB', 'VECTOR DB'],
            link: 'https://github.com/Mukhunyeledzi-Muthuphei/chromadb-tui'
        }
    ];

    const NAV = [
        { href: '#blueprint', number: '01', label: 'BLUEPRINT' },
        { href: '#babies', number: '02', label: 'BABIES' },
        { href: '#writing', number: '03', label: 'WRITING' },
        { href: '#contact', number: '✉', label: 'CONTACT' }
    ];

    const EMAIL = 'muthupheimukhunyeledzi@gmail.com';
    let copied = $state(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            copied = true;
            setTimeout(() => (copied = false), 1800);
        } catch {
            // Clipboard can be blocked (insecure context, permissions); fall back to mail.
            location.href = `mailto:${EMAIL}`;
        }
    }
</script>

<nav class="top-nav" aria-label="Sections">
    <div class="top-nav-inner">
        <a href="#top" class="nav-logo">THUPS <span class="nav-slash">//</span> DEV LOG</a>
        <ul class="nav-links">
            {#each NAV as item (item.href)}
                <li>
                    <a href={item.href}><span class="nav-num">{item.number}</span><span class="nav-label">{item.label}</span></a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<div class="main-content">

    <!-- Hero Section -->
    <section id="top" class="hero animate-on-scroll" use:scrollReveal>
        <div class="about-hero">
            <figure class="sketch-photo-frame">
                <span class="tape" aria-hidden="true"></span>
                <img
                    class="photo-placeholder"
                    src="/profile_sketch.jpg"
                    alt="Thups Mukhunyeledzi at his University of the Witwatersrand graduation"
                    width="1866"
                    height="2400"
                    fetchpriority="high"
                />
                <figcaption class="hand-note photo-caption">grad day @ Wits ✶</figcaption>
            </figure>

            <div class="hero-copy">
                <p class="hero-kicker"><span class="status-dot status-dot-ink"></span>HI, I'M THUPS MUKHUNYELEDZI</p>
                <h1 class="hero-title">
                    SOFTWARE<br>
                    <span class="scribble">ENGINEER<svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M4 16 C 50 6, 95 20, 150 11 S 240 4, 296 13" /></svg></span><span class="hero-dot">.</span>
                </h1>
                <p class="hero-lede">
                    <span class="highlight-blue">WITS ALUMNI</span> // By day, a Software Engineer at <span class="highlight-red">BBD</span>, building mobile and web apps. The rest of the time I'm pulling systems apart to see why they behave the way they do: runtimes, cars, brains, the universe.
                </p>
                <div class="hero-actions">
                    <a href="#contact" class="btn-sketch">START PROJECT // CONTACT</a>
                    <a href="#babies" class="btn-ghost">SEE WHAT I'VE BUILT ↓</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Blueprint Section -->
    <section id="blueprint">
        <SketchHeading number="01" text="THE BLUEPRINT" />

        <ol class="timeline">
            {#each EXPERIENCE as exp (exp.title)}
                {@const [kind, org] = exp.title.split(': ')}
                <li
                    class="timeline-item animate-on-scroll"
                    style="--accent: var(--color-{exp.color})"
                    use:scrollReveal
                >
                    <span class="timeline-dot" aria-hidden="true"></span>
                    <div class="timeline-card">
                        <div class="timeline-head">
                            <span class="timeline-kind">{kind}</span>
                            <span class="timeline-period">{exp.period}</span>
                        </div>
                        <h3 class="timeline-org">{org}</h3>
                        <p class="timeline-role">{exp.role}</p>
                        <p class="timeline-focus">{exp.focus}</p>
                        <div>
                            {#each exp.tags as tag (tag)}
                                <Tag text={tag} />
                            {/each}
                        </div>
                    </div>
                </li>
            {/each}
        </ol>
    </section>

    <!-- My Babies Section -->
    <section id="babies">
        <SketchHeading number="02" text="MY BABIES" />
        <SketchBox class="startup">
            <span class="tape" aria-hidden="true"></span>
            <div class="startup-header">
                <div>
                    <div class="startup-founded-stamp">FOUNDED {SANDY_GIFT.founded}</div>
                    <h2 class="startup-name">SANDY GIFT</h2>
                    <p class="startup-tagline">{SANDY_GIFT.tagline}</p>
                </div>
                <div class="startup-status-badge">
                    <span class="status-dot"></span>
                    {SANDY_GIFT.status}
                </div>
            </div>

            <p class="startup-description">{SANDY_GIFT.description}</p>

            <div class="startup-footer">
                <a href={SANDY_GIFT.link} target="_blank" rel="noopener noreferrer" class="btn-sketch">
                    VISIT SANDYGIFT.APP →
                </a>
                <span class="startup-meta"><strong>ROLE:</strong> {SANDY_GIFT.role}</span>
            </div>
        </SketchBox>

        <p class="hand-note grid-note">…and the side projects that keep me up at night ↓</p>

        <div class="card-grid">
            {#each PROJECTS as project (project.link)}
                <a
                    class="card animate-on-scroll"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    use:scrollReveal
                >
                    <span class="tape" aria-hidden="true"></span>
                    <div class="card-meta">
                        <span>{project.year}</span>
                        <span class="card-badge">{project.language}</span>
                    </div>

                    <h3 class="card-title">{project.name}</h3>
                    <p class="card-excerpt">{project.description}</p>

                    <div class="card-tags">
                        {#each project.tags as tag (tag)}
                            <Tag text={tag} />
                        {/each}
                    </div>

                    <span class="card-cta">VIEW ON GITHUB <span class="arrow">→</span></span>
                </a>
            {/each}
        </div>
    </section>

    <!-- Writing Section -->
    <section id="writing">
        <SketchHeading number="03" text="WRITING" />

        <div class="writing-intro">
            <p>{WRITING_INTRO}</p>
            <a href={MEDIUM_PROFILE} target="_blank" rel="noopener noreferrer" class="btn-sketch">
                FOLLOW ON MEDIUM →
            </a>
        </div>

        <div class="card-grid">
            {#each data.articles as article (article.link)}
                <a
                    class="card animate-on-scroll"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    use:scrollReveal
                >
                    <span class="tape" aria-hidden="true"></span>
                    <div class="card-meta">
                        <time datetime={article.date}>{article.dateLabel}</time>
                        <span class="card-badge">{article.readingTime}</span>
                    </div>

                    <h3 class="card-title">{article.title}</h3>
                    <p class="card-excerpt">{article.excerpt}</p>

                    <div class="card-tags">
                        {#each article.tags as tag (tag)}
                            <Tag text={tag} />
                        {/each}
                    </div>

                    <span class="card-cta">READ ON MEDIUM <span class="arrow">→</span></span>
                </a>
            {/each}
        </div>
    </section>

    <!-- Contact Section -->
    <footer id="contact" class="contact">
        <SketchHeading text="LET'S CHAT." dashed />

        <div class="postcard animate-on-scroll" use:scrollReveal>
            <div class="postcard-message">
                <p class="hand-note postcard-hello">Hey you,</p>
                <p>Available for high-impact roles and consulting opportunities. Got something you want built, or a system you want pulled apart? Drop me a line.</p>
                <p class="hand-note postcard-sign">— Thups</p>
            </div>

            <div class="postcard-address">
                <div class="postcard-stamp" aria-hidden="true">
                    <span>ZA</span>
                    <small>JHB · 2026</small>
                </div>

                <div class="postcard-line">
                    <span class="postcard-label highlight-red">EMAIL</span>
                    <a href="mailto:{EMAIL}">{EMAIL}</a>
                    <button type="button" class="copy-btn" onclick={copyEmail}>
                        {copied ? 'COPIED ✓' : 'COPY'}
                    </button>
                </div>
                <div class="postcard-line">
                    <span class="postcard-label highlight-blue">LINKEDIN</span>
                    <a href="https://www.linkedin.com/in/mukhunyeledzi-muthuphei-76b813273/" target="_blank" rel="noopener noreferrer">/in/mukhunyeledzi-muthuphei</a>
                </div>
                <div class="postcard-line">
                    <span class="postcard-label highlight-red">MEDIUM</span>
                    <a href={MEDIUM_PROFILE} target="_blank" rel="noopener noreferrer">@tendanifallain</a>
                </div>
                <div class="postcard-line">
                    <span class="postcard-label highlight-blue">GITHUB</span>
                    <a href="https://github.com/Mukhunyeledzi-Muthuphei" target="_blank" rel="noopener noreferrer">@Mukhunyeledzi-Muthuphei</a>
                </div>
            </div>
        </div>

        <p class="log-end">
            DEV LOG END. 2026. <a href="#top">BACK TO TOP ↑</a>
        </p>
    </footer>

</div>

<style>
    strong {
        font-weight: 700;
        color: var(--color-red);
    }

    /* ── Sticky nav ── */
    .top-nav {
        position: sticky;
        top: 0;
        z-index: 10;
        margin: 0 -20px;
        padding: 0 20px;
        background: color-mix(in srgb, var(--color-paper) 88%, transparent);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border-bottom: 2px dashed var(--color-ink);
    }

    .top-nav-inner {
        max-width: var(--content-width);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        height: 3.75rem;
    }

    .nav-logo {
        font-weight: 700;
        letter-spacing: 0.08em;
        color: var(--color-ink);
        text-decoration: none;
        white-space: nowrap;
    }
    .nav-slash { color: var(--color-red); }

    .nav-links {
        display: flex;
        gap: 0.25rem;
        list-style: none;
    }

    .nav-links a {
        display: block;
        padding: 0.35rem 0.6rem;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: var(--color-ink);
        text-decoration: none;
        border: 2px solid transparent;
        transition: border-color 0.15s, transform 0.15s;
    }
    .nav-links a:hover {
        border-color: var(--color-ink);
        background: white;
        transform: rotate(-2deg);
    }

    .nav-num {
        color: var(--color-red);
        margin-right: 0.35rem;
    }

    /* ── Hero ── */
    .hero {
        padding: 4.5rem 0 3rem;
    }

    .hero-copy {
        flex: 1;
        text-align: center;
    }

    .hero-kicker {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        margin-bottom: 1rem;
    }

    .scribble {
        position: relative;
        display: inline-block;
    }
    .scribble svg {
        position: absolute;
        left: 0;
        bottom: -0.12em;
        width: 100%;
        height: 0.25em;
        overflow: visible;
    }
    .scribble path {
        fill: none;
        stroke: var(--color-red);
        stroke-width: 7;
        stroke-linecap: round;
        stroke-dasharray: 320;
        stroke-dashoffset: 320;
        animation: draw 0.9s 0.5s ease-out forwards;
    }
    @keyframes draw {
        to { stroke-dashoffset: 0; }
    }

    .hero-dot { color: var(--color-red); }

    .hero-lede {
        font-size: clamp(1.1rem, 2.4vw, 1.4rem);
        line-height: 1.65;
        max-width: 42ch;
        margin: 0 auto;
    }

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.25rem;
        margin-top: 2.25rem;
    }

    .photo-caption {
        text-align: center;
        font-size: 1.45rem;
        color: var(--color-ink);
        padding: 0.4rem 0 0.6rem;
    }

    @media (min-width: 900px) {
        .hero-copy { text-align: left; }
        .hero-lede { margin: 0; }
        .hero-actions { justify-content: flex-start; }
    }

    /* ── Blueprint timeline ── */
    .timeline {
        position: relative;
        list-style: none;
        padding-left: 2.25rem;
        margin-bottom: 1rem;
    }
    /* The dashed spine */
    .timeline::before {
        content: '';
        position: absolute;
        left: 0.55rem;
        top: 0.5rem;
        bottom: 0.5rem;
        border-left: 3px dashed var(--color-ink);
    }

    .timeline-item {
        position: relative;
        margin-bottom: 1.75rem;
    }

    .timeline-dot {
        position: absolute;
        left: calc(-2.25rem + 0.55rem - 8px);
        top: 1.4rem;
        width: 19px;
        height: 19px;
        background: var(--accent);
        border: 3px solid var(--color-ink);
        border-radius: 50%;
    }

    .timeline-card {
        background: var(--color-card);
        border: 3px solid var(--color-ink);
        border-left-width: 8px;
        border-left-color: var(--accent);
        padding: 1.25rem 1.5rem;
        box-shadow: 5px 5px 0 0 var(--color-ink);
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .timeline-card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 8px 8px 0 0 var(--accent);
    }

    .timeline-head {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.15em;
        color: var(--color-muted);
    }

    .timeline-period {
        color: var(--color-ink);
        border: 2px solid var(--color-ink);
        padding: 0 0.5rem;
        transform: rotate(1.5deg);
    }

    .timeline-org {
        font-family: var(--font-marker);
        font-weight: 400;
        font-size: clamp(1.4rem, 3.5vw, 1.9rem);
        line-height: 1.15;
        margin: 0.4rem 0 0.15rem;
    }

    .timeline-role {
        font-weight: 700;
        color: var(--accent);
        filter: brightness(0.85);
        margin-bottom: 0.6rem;
    }

    .timeline-focus {
        line-height: 1.65;
        margin-bottom: 1rem;
        max-width: 70ch;
    }

    /* ── Sandy Gift Card ── */
    .startup-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .startup-founded-stamp {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        color: var(--color-red);
        margin-bottom: 0.4rem;
    }

    .startup-name {
        font-family: var(--font-marker);
        font-weight: 400;
        font-size: clamp(2.5rem, 8vw, 4.5rem);
        line-height: 1;
        color: var(--color-ink);
        letter-spacing: 0.02em;
    }

    .startup-tagline {
        font-family: var(--font-hand);
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--color-blue);
        margin-top: 0.4rem;
    }

    /* Rubber-stamp look */
    .startup-status-badge {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-red);
        font-weight: 700;
        font-size: 0.95rem;
        letter-spacing: 0.25em;
        padding: 0.35rem 0.9rem;
        border: 3px double var(--color-red);
        border-radius: 4px;
        transform: rotate(6deg);
        white-space: nowrap;
    }

    .status-dot {
        width: 9px;
        height: 9px;
        background: var(--color-red);
        border-radius: 50%;
        animation: pulse 1.5s ease-in-out infinite;
    }
    .status-dot-ink { background: var(--color-green); }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }

    .startup-description {
        font-size: 1.05rem;
        line-height: 1.7;
        color: var(--color-ink);
        margin-bottom: 1.75rem;
        max-width: 680px;
    }

    .startup-footer {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
    }

    .startup-meta {
        font-size: 0.9rem;
        color: var(--color-muted);
    }

    .grid-note {
        margin: 1rem 0 1.5rem 0.5rem;
        transform: rotate(-1deg);
    }

    /* ── Writing / Medium ── */
    .writing-intro {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-bottom: 2.5rem;
    }

    .writing-intro p {
        font-size: 1.1rem;
        line-height: 1.6;
        max-width: min(600px, 100%);
    }

    /* ── Shared card grid (projects + Medium articles) ── */
    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr));
        gap: 2.25rem 1.75rem;
        margin-bottom: 2rem;
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: var(--color-card);
        border: 3px solid var(--color-ink);
        box-shadow: 5px 5px 0px 0px var(--color-ink);
        padding: 1.6rem 1.5rem 1.4rem;
        text-decoration: none;
        color: var(--color-ink);
        /* Pinned-up-by-hand tilt; `rotate` stays separate from the reveal transform. */
        rotate: -0.6deg;
        transition: transform 0.2s, box-shadow 0.2s, rotate 0.2s;
    }
    .card:nth-child(even) { rotate: 0.6deg; }
    .card:nth-child(3n) .tape { transform: translateX(-50%) rotate(4deg); }

    .card:hover {
        rotate: 0deg;
        transform: translate(-3px, -4px);
        box-shadow: 9px 9px 0px 0px var(--color-red);
    }

    .card-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: var(--color-muted);
        padding-bottom: 0.6rem;
        margin-bottom: 0.9rem;
        border-bottom: 2px dashed var(--color-ink);
    }

    .card-badge {
        background: var(--color-blue);
        color: white;
        padding: 2px 7px;
        white-space: nowrap;
    }

    .card-title {
        font-size: 1.3rem;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        /* Titles run long; never let one push the card wider. */
        overflow-wrap: break-word;
    }

    .card-excerpt {
        font-size: 0.95rem;
        line-height: 1.6;
        color: #333;
        /* Keeps cards in a row roughly level regardless of excerpt length. */
        flex-grow: 1;
        margin-bottom: 1rem;
    }

    .card-tags {
        margin-bottom: 0.75rem;
    }

    .card-cta {
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        color: var(--color-red);
    }
    .card-cta .arrow {
        display: inline-block;
        transition: transform 0.2s;
    }
    .card:hover .card-cta .arrow { transform: translateX(6px); }

    /* ── Contact postcard ── */
    .contact {
        padding: 5rem 0 2rem;
        text-align: center;
    }

    .postcard {
        display: grid;
        grid-template-columns: 1fr 1.15fr;
        text-align: left;
        background: var(--color-card);
        border: 3px solid var(--color-ink);
        box-shadow: 8px 8px 0 0 var(--color-ink);
        /* Airmail edge */
        background-image: repeating-linear-gradient(
            135deg,
            var(--color-red) 0 12px,
            var(--color-card) 12px 24px,
            var(--color-blue) 24px 36px,
            var(--color-card) 36px 48px
        );
        background-size: 100% 8px;
        background-repeat: no-repeat;
        padding-top: 8px;
        rotate: -0.5deg;
    }

    .postcard-message {
        padding: 2rem;
        border-right: 2px dashed var(--color-ink);
        font-size: 1.05rem;
        line-height: 1.7;
    }

    .postcard-hello {
        font-size: 2rem;
        color: var(--color-ink);
        margin-bottom: 0.5rem;
    }

    .postcard-sign {
        font-size: 1.8rem;
        color: var(--color-red);
        margin-top: 0.75rem;
    }

    .postcard-address {
        position: relative;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 0.2rem;
    }

    .postcard-stamp {
        align-self: flex-end;
        display: grid;
        place-items: center;
        width: 84px;
        height: 96px;
        margin-bottom: 1.25rem;
        border: 3px dashed var(--color-red);
        outline: 6px solid var(--color-card);
        background: color-mix(in srgb, var(--color-red) 10%, var(--color-card));
        color: var(--color-red);
        transform: rotate(5deg);
        line-height: 1;
    }
    .postcard-stamp span {
        font-family: var(--font-marker);
        font-size: 2rem;
    }
    .postcard-stamp small {
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.1em;
    }

    .postcard-line {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.6rem;
        padding: 0.55rem 0;
        border-bottom: 2px solid var(--color-ink);
        font-weight: 700;
        min-width: 0;
    }

    .postcard-label {
        font-size: 0.75rem;
        letter-spacing: 0.1em;
    }

    .postcard-line a {
        color: var(--color-ink);
        text-decoration: none;
        overflow-wrap: anywhere;
        background-image: linear-gradient(var(--color-red), var(--color-red));
        background-size: 0% 3px;
        background-position: 0 100%;
        background-repeat: no-repeat;
        transition: background-size 0.25s;
    }
    .postcard-line a:hover { background-size: 100% 3px; }

    .copy-btn {
        margin-left: auto;
        font: inherit;
        font-size: 0.7rem;
        letter-spacing: 0.1em;
        padding: 0.15rem 0.5rem;
        background: var(--color-paper);
        color: var(--color-ink);
        border: 2px solid var(--color-ink);
        cursor: pointer;
        transition: background 0.15s;
    }
    .copy-btn:hover { background: var(--color-green); }

    .log-end {
        margin-top: 3rem;
        font-size: 0.8rem;
        letter-spacing: 0.1em;
    }
    .log-end a {
        margin-left: 1rem;
        color: var(--color-red);
        font-weight: 700;
        text-decoration: none;
    }

    @media (max-width: 700px) {
        .nav-label { display: none; }
        .nav-num { margin-right: 0; }

        .postcard { grid-template-columns: 1fr; }
        .postcard-message {
            border-right: none;
            border-bottom: 2px dashed var(--color-ink);
        }
        .postcard-stamp { display: none; }
    }

    @media (max-width: 600px) {
        .writing-intro {
            flex-direction: column;
            align-items: flex-start;
        }
        .card-grid {
            grid-template-columns: 1fr;
        }
        .timeline { padding-left: 1.75rem; }
        .timeline-dot { left: calc(-1.75rem + 0.55rem - 8px); }
        .timeline-card { padding: 1rem 1.1rem; }
    }
</style>
