<script lang="ts">
  import type { Snippet } from 'svelte';

  // Define the prop type
  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<section id="sectionPin">
	<div class="pin-wrap-sticky">
		<div class="pin-wrap">…</div>
	</div>
</div>

<style>
  @keyframes move {
    to {
      /* Move horizontally so that right edge is aligned against the viewport */
      transform: translateX(calc(-100% + 100vw));
    }
  }

  #sectionPin {
    /* Stretch it out, so that we create room for the horizontal scroll animation */
    height: 500vh;
    overflow: visible; /* To make position sticky work … */

    view-timeline-name: --section-pin-tl;
    view-timeline-axis: block;
  }

  .pin-wrap-sticky {
    /* Stick to Top */
    height: 100vh;
    width: 100vw;
    position: sticky;
    top: 0;

    width: 100vw;
    overflow-x: hidden;
  }

  .pin-wrap {
    height: 100svh;
    width: 250vmax;

    /* Hook animation */
    will-change: transform;
    animation: linear move forwards;

    /* Link animation to view-timeline */
    animation-timeline: --section-pin-tl;
    animation-range: contain 0% contain 100%;
  }
</style>