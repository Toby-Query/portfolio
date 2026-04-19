<script lang="ts">
    let { text } = $props<{ text: string }>();
</script>

<span class="tag">
    {text}
</span>

<style>
    .tag {
        display: inline-block;
        background: var(--color-green);
        color: var(--color-ink);
        padding: 4px 8px;
        border: 2px solid var(--color-ink);
        font-weight: bold;
        font-size: 0.9rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        transform: rotate(-1deg);
    }
</style>
