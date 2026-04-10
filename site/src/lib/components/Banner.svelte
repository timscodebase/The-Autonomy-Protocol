<script lang="ts">
    let { children } = $props();

    

	let showBanner = $state(true);
</script>

{#if showBanner}
    <div class="banner">
        <button onclick={() => showBanner = false}>×</button>
        {@render children()}
    </div>
{/if}

<style>
    :global(.banner) {
        position: relative;
        color: var(--accent);
        background: rgb(from var(--accent) r g b / 0.25);
        border: 1px solid var(--accent);
        border-radius: var(--gap-1);
        padding: 10px var(--gap-1);
        margin-bottom: var(--gap-2);
        height: fit-content;

        button {
            position: absolute;
            top: 5px;
            right: 5px;
            background: none;
            border: none;
            color: var(--accent);
            font-size: 1.25rem;
            cursor: pointer;
        }
    }

    :global(.banner a) {
        color: white;
    }
</style>