<template>
	<div>
		<section>
			<h2>Our Story</h2>
			<p>Buy Time was founded with the goal of providing discerning customers with the finest timepieces
				from the world's most prestigious brands. Our team of experts has carefully curated a selection of watches
				that meet our exacting standards for quality, craftsmanship, and design.</p>
		</section>

		<section>
			<h2>Our Brands</h2>
			<p>We offer a wide range of high-end watch brands, including:</p>
			<ul>
				<li>Rolex</li>
				<li>Quartz</li>
				<li>Fossil</li>
				<li>Emporio Armani</li>
				<li>IWC</li>
				<li>And many more...</li>
			</ul>
		</section>

		<section>
			<h2>Our Guarantee</h2>
			<p>We stand behind the quality of every watch we sell. Each timepiece comes with a manufacturer's warranty and
				our own guarantee of authenticity. We also offer free shipping and hassle-free returns.</p>
		</section>
	</div>
</template>

<script>
export default {
	name: 'About'
}
</script>

<style scoped>
body {
  background-color: #1d1d1d;
  color: #fff;
}

div {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 28px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}

section {
  opacity: 0;
  animation: fade-in 1s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 