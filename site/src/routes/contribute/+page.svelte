<script lang="ts">
    import HeroImage from '$images/img-4.jpg?enhanced&w=400;800;1600;2400';
</script>

<section class="hero">
    <enhanced:img
		src={HeroImage}
		sizes="(min-width: 800px) 800px, 100vw"
		alt="" 
		aria-hidden="true"
		class="hero-image"
	/>
	<div>
		<h1>We Need Contributers</h1>
		<p>
      Would you like to contribute to this project?  We need teachers and administrators with experience to help build lesson plans, homework, artwork and other content.  You could help shap the future of our students and future leaders!
		</p>
	</div>
</section>
