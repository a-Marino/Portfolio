<template>
    <header class="fixed right-0">
        <nav class="hidden md:flex p-3">
            <ul class="flex space-x-4 text-lg">
                <li>
                    <router-link to="/" v-scroll-to="'#About'">About</router-link> 
                </li>
                <li>
                    <router-link to="/" v-scroll-to="'#Projects'">Projects</router-link> 
                </li>
                <li>
                    <router-link to="/" v-scroll-to="'#Contact'">Contact</router-link> 
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Nav'
}
</script>