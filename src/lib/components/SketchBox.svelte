<script lang="ts">
    import { scrollReveal } from '$lib/actions/scrollReveal';

    let {
        children,
        style = '',
        class: className = ''
    } = $props<{
        children: any,
        style?: string,
        class?: string
    }>();
</script>

<div
    class="sketch-box animate-on-scroll {className}"
    {style}
    use:scrollReveal
>
    {@render children()}
</div>

<style>
    .sketch-box {
        background: var(--color-card);
        border: 3px solid var(--color-ink);
        padding: 2rem;
        margin-bottom: 2rem;
        position: relative;
        /* Two offset strokes read as a hand-redrawn outline. */
        box-shadow:
            2px 2px 0 0 var(--color-paper),
            7px 7px 0 0 var(--color-ink);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .sketch-box:hover {
        transform: translate(-3px, -3px);
        box-shadow:
            2px 2px 0 0 var(--color-paper),
            10px 10px 0 0 var(--color-red);
    }

    @media (max-width: 600px) {
        .sketch-box { padding: 1.4rem; }
    }
</style>
