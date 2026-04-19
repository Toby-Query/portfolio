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
        background: white;
        border: 3px solid var(--color-ink);
        padding: 2rem;
        margin-bottom: 2rem;
        position: relative;
        box-shadow: 
            -5px -5px 0px 0px var(--color-ink), 
            5px 5px 0px 0px var(--color-ink),
            3px 3px 0px 0px var(--color-ink);
        transition: all 0.2s;
    }

    .sketch-box:hover {
        transform: translate(-3px, -3px) rotate(0.5deg);
        box-shadow: 
            -8px -8px 0px 0px var(--color-red), 
            8px 8px 0px 0px var(--color-red),
            3px 3px 0px 0px var(--color-red);
    }
</style>
