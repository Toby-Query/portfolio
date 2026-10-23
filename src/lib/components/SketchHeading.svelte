<script lang="ts">
    import { scrollReveal } from '$lib/actions/scrollReveal';

    let { number = '', text, dashed = false } = $props<{
        number?: string,
        text: string,
        dashed?: boolean
    }>();
</script>

<h2
    class="sketch-heading animate-on-scroll"
    class:dashed
    use:scrollReveal
>
    {#if number}<span class="number">{number}</span>{/if}
    <span class="text">{text}</span>
</h2>

<style>
    .sketch-heading {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        font-family: var(--font-marker);
        font-size: clamp(2rem, 5vw, 3rem);
        line-height: 1;
        margin-bottom: 2rem;
    }

    /* Circled page number, like a stamp in the margin. */
    .number {
        flex: none;
        display: grid;
        place-items: center;
        width: 2.4em;
        height: 2.4em;
        font-family: var(--font-typed);
        font-size: 0.42em;
        font-weight: 700;
        color: var(--color-red);
        border: 3px solid var(--color-red);
        border-radius: 52% 48% 55% 45% / 50% 55% 45% 50%;
        transform: rotate(-8deg);
    }

    /* Highlighter swipe behind the lower half of the words. */
    .text {
        position: relative;
        z-index: 0;
    }
    .text::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: -0.15em;
        right: -0.2em;
        bottom: 0.02em;
        height: 0.42em;
        background: var(--color-red);
        opacity: 0.28;
        border-radius: 0.3em 0.1em 0.4em 0.15em;
        transform: rotate(-1deg) scaleX(0);
        transform-origin: left;
        transition: transform 0.7s 0.3s ease-out;
    }
    .sketch-heading:global(.in-view) .text::after {
        transform: rotate(-1deg) scaleX(1);
    }

    .dashed {
        justify-content: center;
    }
    .dashed .text::after {
        background: var(--color-blue);
    }
</style>
