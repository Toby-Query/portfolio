<script lang="ts">
    let { text } = $props<{ text: string }>();
</script>

<span class="tag">
    {text}
</span>

<style>
    .tag {
        display: inline-block;
        background: var(--color-paper);
        color: var(--color-ink);
        padding: 2px 8px;
        border: 2px solid var(--color-ink);
        border-radius: 3px 6px 3px 5px;
        font-weight: 700;
        font-size: 0.72rem;
        letter-spacing: 0.06em;
        margin: 0 0.4rem 0.45rem 0;
        transform: rotate(-1deg);
        transition: background 0.15s, transform 0.15s;
    }
    .tag:nth-child(even) {
        transform: rotate(1deg);
    }
    .tag:hover {
        background: var(--color-green);
        transform: rotate(0deg) scale(1.05);
    }
</style>
