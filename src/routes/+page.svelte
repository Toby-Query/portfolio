<script lang="ts">
    import { scrollReveal } from '$lib/actions/scrollReveal';
    import Tag from '$lib/components/Tag.svelte';
    import SketchHeading from '$lib/components/SketchHeading.svelte';
    import SketchBox from '$lib/components/SketchBox.svelte';

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
            tags: ['TUTORING', 'ALGORITHMS', 'DATA STRUCTURES', 'WITS'],
            color: 'green'
        },
        {
            title: 'EDUCATION: WITS (UNDERGRAD)',
            role: 'BSc Computer Science',
            period: '2022 - 2024',
            focus: 'Foundation in algorithms, data structures, and software engineering principles.',
            tags: ['Operating Systems', 'Databases', 'Networks', 'Graphics'],
            color: 'blue'
        }
    ];

    const SKILLS = [
        {
            category: 'MOBILE & WEB',
            items: ['React Native / Expo', 'Next.js / SolidJS / Svelte', '11ty (Static Site Gen)', 'TypeScript / JavaScript'],
            color: 'var(--color-red)'
        },
        {
            category: 'CLOUD & OPS',
            items: ['Azure / AWS / Vercel / Firebase', 'Grafana (Monitoring)', 'Docker', 'CI/CD Pipelines'],
            color: 'var(--color-blue)'
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
            title: 'WITS PEN TESTING TOOL',
            description: 'A specialized security auditing tool developed for the Wits University network to identify and patch vulnerabilities.',
            link: '#',
            linkText: '[ VIEW PROJECT ]'
        },
        {
            title: 'MOBILE ECOSYSTEM (BBD)',
            description: 'Scalable React Native applications with integrated Expo modules and high-performance cross-platform logic.',
            link: '#',
            linkText: '[ CASE STUDY ]'
        },
        {
            title: 'MODERN WEB STACK',
            description: 'Exploration of performance-first frameworks like SolidJS and Next.js for enterprise-grade web experiences.',
            link: '#',
            linkText: '[ VIEW DETAILS ]'
        }
    ];
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

    <!-- Skillset Section -->
    <section>
        <SketchHeading number="02" text="SKILLSET" />
        <div class="skills-grid">
            {#each SKILLS as skill}
                <SketchBox style="background: {skill.color}; color: white;">
                    <h3 style="font-family: 'Permanent Marker', cursive; border-bottom: 2px solid white; padding-bottom: 5px;">
                        {skill.category}
                    </h3>
                    <ul style="list-style: square; padding-left: 1.5rem;">
                        {#each skill.items as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                </SketchBox>
            {/each}
        </div>
    </section>

    <!-- Projects Section -->
    <section>
        <SketchHeading number="03" text="PROJECTS & CODE" />
        <div class="projects-grid">
            {#each PROJECTS as project}
                <SketchBox>
                    <h3 style="font-size: 1.5rem;">{project.title}</h3>
                    <p style="font-size: 0.9rem;">{project.description}</p>
                    <a href={project.link} style="color: var(--color-red); font-weight: 700;">
                        {project.linkText}
                    </a>
                </SketchBox>
            {/each}
        </div>
    </section>

    <!-- Startup Section -->
    <section class="animate-on-scroll" use:scrollReveal>
        <SketchHeading number="04" text="STARTUP" />
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

    <!-- Contact Section -->
    <footer id="contact" style="padding: 4rem 0; text-align: center;">
        <SketchHeading text="LET'S CHAT." dashed />
        <p style="font-size: 1.2rem; margin-bottom: 1rem;">
            Available for high-impact roles and consulting opportunities.
        </p>
        <div style="font-weight: 700; font-size: 1.3rem;">
            <span class="highlight-red">EMAIL:</span> muthupheimukhunyeledzi@gmail.com<br>
            <span class="highlight-blue">LINKEDIN:</span> <a href="https://www.linkedin.com/in/mukhunyeledzi-muthuphei-76b813273/" style="color: inherit; text-decoration: none;">/in/mukhunyeledzi-muthuphei</a>
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
</style>
