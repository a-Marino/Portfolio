<template>
	<div class="min-h-screen" id="index">
		<div class="flex justify-center divImg">
			<img src="@/assets/images/IMG_20200323_032556_293.png" class="imagen lg:mt-32 md:mt-32 mt-48 animate__animated animate__bounceIn" alt="logo">  
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Logo',
	}
</script>

<style scoped>
	.divImg {
        overflow: hidden;
    }

    .imagen {
        background-color: transparent;
        animation-duration: 2s;
        animation-delay: .5s;
    }
</style>