<template>
    <header class="fixed right-0">
        <nav class="hidden md:flex p-3">
            <ul class="flex space-x-4 text-lg">
                <li>
                    <router-link to="/redesign">About</router-link> 
                </li>
                <li>
                    <router-link to="/redesign">Projects</router-link> 
                </li>
                <li>
                    <router-link to="/redesign">Contact</router-link> 
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