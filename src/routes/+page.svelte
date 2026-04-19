<script lang="ts">
    import { scrollReveal } from '$lib/actions/scrollReveal';
    import Tag from '$lib/components/Tag.svelte';
    import SketchHeading from '$lib/components/SketchHeading.svelte';
    import SketchBox from '$lib/components/SketchBox.svelte';

    const EXPERIENCE = [
        {
            title: 'EXPERIENCE: BBD',
            role: 'Software Developer',
            period: '2023 - Present',
            focus: 'Financial systems and enterprise solutions. Core contributions include the successful migration of legacy APIs and implementing performance-critical optimizations in Java Spring services.',
            tags: ['AGILE', 'JAVA 8+', 'AWS/CLOUD', 'KAFKA'],
            color: 'red'
        },
        {
            title: 'EDUCATION: WITS',
            role: 'BSc Computer Science',
            period: '2019 - 2022',
            focus: 'Deep dive into algorithms, data structures, and theoretical computing. Graduated with distinction in core Software Engineering modules.',
            tags: ['C++', 'ALGORITHMS', 'THEORY'],
            color: 'blue'
        }
    ];

    const SKILLS = [
        {
            category: 'BACKEND DEPTH',
            items: ['Java/Spring Boot (5 years)', 'C# / .NET Core', 'PostgreSQL / MS SQL', 'RESTful API Design'],
            color: 'var(--color-red)'
        },
        {
            category: 'CLOUD & DEVOPS',
            items: ['AWS (EC2, S3, RDS)', 'Docker / Kubernetes', 'Kafka / Messaging', 'CI/CD (Jenkins)'],
            color: 'var(--color-blue)'
        }
    ];

    const PROJECTS = [
        {
            title: 'FINTECH GATEWAY',
            description: 'High-throughput payment processing engine. Impact: Reduced transaction time by 20%.',
            link: '#',
            linkText: '[ VIEW REPORT ]'
        },
        {
            title: 'LEGACY MIGRATION',
            description: 'Successful migration of core services to the cloud using Azure. Value: Cut infrastructure costs by 15%.',
            link: '#',
            linkText: '[ VIEW DETAILS ]'
        },
        {
            title: 'WITS CAPSTONE',
            description: 'A predictive ML model for resource allocation. Skill: Advanced Python and statistical analysis.',
            link: '#',
            linkText: '[ GITHUB LINK ]'
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
                <div class="photo-placeholder" style="background-image: url('/profile_sketch.jpg');"></div>
                <p style="text-align: center; font-size: 0.9rem; margin-top: 5px; font-weight: 700;">Thups Mukhunyeledzi</p>
            </div>

            <div>
                <h1 class="hero-title">
                    SYSTEMS<br>
                    ENGINEER<span class="highlight-red">.</span>
                </h1>
                <p style="font-size: 1.5rem; margin-top: 1rem;">
                    <span class="highlight-blue">WITS ALUMNI</span> // Building & optimizing scalable architecture at <span class="highlight-red">BBD</span>. I turn complex problems into robust, working solutions.
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

    <!-- Contact Section -->
    <footer id="contact" style="padding: 4rem 0; text-align: center;">
        <SketchHeading text="LET'S CHAT." dashed />
        <p style="font-size: 1.2rem; margin-bottom: 1rem;">
            Available for high-impact roles and consulting opportunities.
        </p>
        <div style="font-weight: 700; font-size: 1.3rem;">
            <span class="highlight-red">EMAIL:</span> thups@example.com<br>
            <span class="highlight-blue">LINKEDIN:</span> /in/thups<br>
            <span class="highlight-green">GITHUB:</span> /thups-dev
        </div>
        <p style="margin-top: 3rem; font-size: 0.8rem;">
            DEV LOG END. 2025.
        </p>
    </footer>

</div>

<style>
    strong {
        font-weight: 700;
        color: var(--color-red);
    }
</style>
