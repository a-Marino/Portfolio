<template>	
	<div class="redes lg:float-right md:float-right flex justify-center">
        <div class="flex space-x-4 p-4">
            <router-link to='/instagram' class="red-social">
                <img src="@/assets/images/instagram.png" class="w-8">
            </router-link>
            <router-link to='/github' class="red-social">
                <img src="@/assets/images/github.png" class="w-8">
            </router-link>
            <router-link to='/linkedin' class="red-social">
                <img src="@/assets/images/linkedin.png" class="w-8">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>

<style>
	.redes {
		background-color: transparent;
	}

	.red-social {
	  opacity: 0.5;
	  transition: .1s;
	  background-color: transparent;
	}

	img {
		background-color: transparent;
	}

	.red-social:hover {
	  opacity: 1;
	  transform: scale(1.1);
	  transition: .1s;
	}
</style>