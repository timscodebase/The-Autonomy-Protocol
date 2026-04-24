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
		<div class="pin-wrap">
      {@render children()}
    </div>
	</div>
</section>

<style>
  @keyframes move {
    to {
      /* Move horizontally so that right edge is aligned against the viewport */
      transform: translateX(calc(-100% + 100vw));
    }
  }

  #sectionPin {
    max-width: 1000px;
    height: fit-content;
    overflow: visible; /* To make position sticky work … */

    view-timeline-name: --section-pin-tl;
    view-timeline-axis: block;
  }

  .pin-wrap-sticky {
    /* Stick to Top */
    height: fit-content;
    width: 100%;
    position: sticky;
    top: 0;

    /* width: 100vw; */
    overflow-x: hidden;
  }

  .pin-wrap {
    display: flex;
    /* height: 70svh; */
    width: 250vmax;

    /* Hook animation */
    will-change: transform;
    animation: linear move forwards;

    /* Link animation to view-timeline */
    animation-timeline: --section-pin-tl;
    animation-range: contain 0% contain 100%;
  }
</style>