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
</script>

<div class="main-content">
    
    <header style="padding-bottom: 2rem; text-align: right; border-bottom: 1px dashed var(--color-ink);">
        <span style="font-weight: 700;">THUPS MUKHUNYELEDZI // DEV LOG</span>
    </header>

    <!-- Hero Section -->
    <section style="padding: 4rem 0;" class="animate-on-scroll" use:scrollReveal>
        <div class="about-hero">
            <div class="sketch-photo-frame">
                <img
                    class="photo-placeholder"
                    src="/profile_sketch.jpg"
                    alt="Thups Mukhunyeledzi at his University of the Witwatersrand graduation"
                    width="1866"
                    height="2400"
                    fetchpriority="high"
                />
                <p style="text-align: center; font-size: 0.9rem; margin-top: 5px; font-weight: 700;">Thups Mukhunyeledzi</p>
            </div>

            <div>
                <h1 class="hero-title">
                    SOFTWARE<br>
                    ENGINEER<span class="highlight-red">.</span>
                </h1>
                <p style="font-size: 1.5rem; margin-top: 1rem;">
                    <span class="highlight-blue">WITS ALUMNI</span> // Software Engineer at <span class="highlight-red">BBD</span>. Specialized in building high-performance mobile and web applications with a focus on scalable architecture.
                </p>
                <a href="#contact" class="btn-sketch">START PROJECT // CONTACT</a>
            </div>
        </div>
    </section>

    <!-- Blueprint Section -->
    <section>
        <SketchHeading number="01" text="THE BLUEPRINT" />
        
        {#each EXPERIENCE as exp}
            <SketchBox>
                <h3>{exp.title}</h3>
                <p>
                    <strong>Role:</strong> {exp.role} ({exp.period})<br>
                    <strong>Focus:</strong> {exp.focus}
                </p>
                <div style="margin-top: 1rem;">
                    {#each exp.tags as tag}
                        <Tag text={tag} />
                    {/each}
                </div>
            </SketchBox>
        {/each}
    </section>

    <!-- Startup Section -->
    <section class="animate-on-scroll" use:scrollReveal>
        <SketchHeading number="02" text="STARTUP" />
        <SketchBox>
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

            <div class="startup-meta">
                <span><strong>ROLE:</strong> {SANDY_GIFT.role}</span>
            </div>

            <a href={SANDY_GIFT.link} target="_blank" rel="noopener noreferrer" class="startup-link">
                VISIT SANDYGIFT.APP →
            </a>
        </SketchBox>
    </section>

    <!-- Writing Section -->
    <section class="animate-on-scroll" use:scrollReveal>
        <SketchHeading number="03" text="WRITING" />

        <div class="writing-intro">
            <p>{WRITING_INTRO}</p>
            <a href={MEDIUM_PROFILE} target="_blank" rel="noopener noreferrer" class="writing-follow">
                FOLLOW ON MEDIUM →
            </a>
        </div>

        <div class="writing-grid">
            {#each data.articles as article (article.link)}
                <a
                    class="article-card animate-on-scroll"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    use:scrollReveal
                >
                    <div class="article-meta">
                        <time datetime={article.date}>{article.dateLabel}</time>
                        <span class="article-time">{article.readingTime}</span>
                    </div>

                    <h3 class="article-title">{article.title}</h3>
                    <p class="article-excerpt">{article.excerpt}</p>

                    <div class="article-tags">
                        {#each article.tags as tag (tag)}
                            <Tag text={tag} />
                        {/each}
                    </div>

                    <span class="article-cta">[ READ ON MEDIUM ]</span>
                </a>
            {/each}
        </div>
    </section>

    <!-- Contact Section -->
    <footer id="contact" style="padding: 4rem 0; text-align: center;">
        <SketchHeading text="LET'S CHAT." dashed />
        <p style="font-size: 1.2rem; margin-bottom: 1rem;">
            Available for high-impact roles and consulting opportunities.
        </p>
        <div style="font-weight: 700; font-size: 1.3rem;">
            <span class="highlight-red">EMAIL:</span> muthupheimukhunyeledzi@gmail.com<br>
            <span class="highlight-blue">LINKEDIN:</span> <a href="https://www.linkedin.com/in/mukhunyeledzi-muthuphei-76b813273/" style="color: inherit; text-decoration: none;">/in/mukhunyeledzi-muthuphei</a><br>
            <span class="highlight-red">MEDIUM:</span> <a href={MEDIUM_PROFILE} target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">@tendanifallain</a>
        </div>
        <p style="margin-top: 3rem; font-size: 0.8rem;">
            DEV LOG END. 2026.
        </p>
    </footer>

</div>

<style>
    strong {
        font-weight: 700;
        color: var(--color-red);
    }

    /* ── Sandy Gift Startup Card ── */
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
        font-family: 'Permanent Marker', cursive;
        font-size: clamp(2.5rem, 8vw, 4.5rem);
        line-height: 1;
        color: var(--color-ink);
        letter-spacing: 0.02em;
    }

    .startup-tagline {
        font-size: 1rem;
        color: #555;
        margin-top: 0.5rem;
        font-style: italic;
    }

    .startup-status-badge {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--color-red);
        color: white;
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.15em;
        padding: 0.4rem 0.9rem;
        border: 2px solid var(--color-ink);
        align-self: flex-start;
        white-space: nowrap;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }

    .startup-description {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--color-ink);
        margin-bottom: 1.5rem;
        max-width: 680px;
    }

    .startup-meta {
        font-size: 0.9rem;
        color: #555;
        margin-bottom: 1.5rem;
    }

    .startup-link {
        display: inline-block;
        background: var(--color-ink);
        color: white;
        padding: 0.8rem 1.8rem;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 0.05em;
        text-decoration: none;
        border: 2px solid var(--color-ink);
        box-shadow: 4px 4px 0px 0px var(--color-red);
        transition: all 0.2s;
    }
    .startup-link:hover {
        background: var(--color-red);
        box-shadow: 6px 6px 0px 0px var(--color-ink);
        transform: translate(-2px, -2px);
    }

    /* ── Writing / Medium ── */
    .writing-intro {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .writing-intro p {
        font-size: 1.1rem;
        line-height: 1.6;
        max-width: min(620px, 100%);
    }

    .writing-follow {
        flex-shrink: 0;
        background: var(--color-ink);
        color: var(--color-paper);
        padding: 0.7rem 1.4rem;
        font-weight: 700;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
        text-decoration: none;
        border: 2px solid var(--color-ink);
        box-shadow: 4px 4px 0px 0px var(--color-red);
        transition: all 0.2s;
    }
    .writing-follow:hover {
        background: var(--color-red);
        box-shadow: 6px 6px 0px 0px var(--color-ink);
        transform: translate(-2px, -2px);
    }

    .writing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
        gap: 1.5rem;
    }

    .article-card {
        display: flex;
        flex-direction: column;
        background: white;
        border: 3px solid var(--color-ink);
        box-shadow: 5px 5px 0px 0px var(--color-ink);
        padding: 1.5rem;
        text-decoration: none;
        color: var(--color-ink);
        transition: all 0.2s;
    }
    .article-card:hover {
        transform: translate(-3px, -3px) rotate(-0.4deg);
        box-shadow: 8px 8px 0px 0px var(--color-red);
    }

    .article-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: #555;
        padding-bottom: 0.6rem;
        margin-bottom: 0.9rem;
        border-bottom: 2px dashed var(--color-ink);
    }

    .article-time {
        background: var(--color-blue);
        color: white;
        padding: 2px 7px;
        white-space: nowrap;
    }

    .article-title {
        font-size: 1.35rem;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        /* Medium titles run long; never let one push the card wider. */
        overflow-wrap: break-word;
    }

    .article-excerpt {
        font-size: 0.95rem;
        line-height: 1.6;
        color: #333;
        /* Keeps cards in a row roughly level regardless of excerpt length. */
        flex-grow: 1;
        margin-bottom: 1rem;
    }

    .article-tags {
        margin-bottom: 1rem;
    }

    .article-cta {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--color-red);
    }

    @media (max-width: 600px) {
        .writing-intro {
            flex-direction: column;
            align-items: flex-start;
        }
        .writing-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
