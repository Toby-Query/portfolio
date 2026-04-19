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
    {#if number}{number}. {/if}{text}
</h2>

<style>
    .sketch-heading {
        font-family: 'Permanent Marker', cursive;
        font-size: clamp(2rem, 5vw, 3rem);
        line-height: 1;
        margin-bottom: 1.5rem;
        display: inline-block;
        border-bottom: 4px solid var(--color-ink);
    }

    .dashed {
        border-bottom: 4px dashed var(--color-red);
    }
</style>
