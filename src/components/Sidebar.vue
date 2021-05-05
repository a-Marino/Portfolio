<template>
    <div class="bg-gray-200 w-56">
        <img src="@/assets/images/logo_municipio.svg" alt="Logo Municipio" class="flex m-auto mt-4">
        <div class="flex flex-col items-center min-h-screen">
            <div class="flex flex-col">
                <router-link to="/vacunas" class="py-2 px-4 m-auto border-2 hover:bg-gray-300 hover:border-gray-500 rounded mt-5"><img src="@/assets/images/vacuna.svg" alt="Vacuna" class="w-12 m-auto">Vacunas</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>
