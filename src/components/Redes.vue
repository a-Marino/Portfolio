<template>
    <div>
        <div class="fixed right-0 bottom-0">
            <div class="flex flex-row space-x-4 py-4 px-2">
                <a href="https://www.linkedin.com/in/andr%C3%A9s-marino-16ab14202/" target="blank">
                    <img src="@/assets/images/linkedin.png" class="redes">
                </a>
                <a href="https://github.com/a-Marino" target="blank">
                    <img src="@/assets/images/github.png" class="redes">
                </a>
            </div>
        </div>
        <div class="fixed left-0 bottom-0 p-2">
            <a href="https://www.figma.com/file/rZLhSQ3K4Jj6O4wHX4kSF3/Portfolio?node-id=0%3A1" target="blank">
                <img src="@/assets/images/figma.svg" class="w-10 figma">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Redes'
}
</script>

<style scoped>
.figma {
    filter: opacity(.3);
}

.figma:hover {
    filter: opacity(1);
}
</style>