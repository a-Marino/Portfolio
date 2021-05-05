<template>
    <div>
        <h1 class="text-center text-3xl">Listado de Vacunas</h1>
        <div class="flex mt-10">
            <input type="text" class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Vacuna" v-model="nuevaVacuna" v-on:keyup.enter="agregarVacuna">
            <button class="btn-azul px-8 rounded-r-lg text-gray-800 font-bold p-4 uppercase border-t border-b border-r" @click='agregarVacuna'>Agregar</button>
        </div>
        <div class="mt-5 border-2 border-gray-200 p-3 max-w-full rounded-lg" v-for="(item, index) of vacunas" :key="index">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <img src="@/assets/images/vacuna.svg" class="w-10 mr-5">
                     {{item.nombre}}
                </div>
                <div>
                    <button class="px-3 py-1 bg-red-500 rounded text-white hover:bg-red-600" @click='eliminarVacuna(index)'>X</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Vacunas',
    data: function() {
        return {
            vacunas: [],
            nuevaVacuna: '',
        }
    },
    methods: {
        agregarVacuna: function() {
            this.vacunas.push({
                nombre: this.nuevaVacuna,
            });
            this.nuevaVacuna = '';
            this.actualizarLocalStorage();
        },
        eliminarVacuna: function(index) {
            this.vacunas.splice(index, 1);
            this.actualizarLocalStorage();
        },
        actualizarLocalStorage: function() {
            localStorage.setItem('vacunas', JSON.stringify(this.vacunas));
        },
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('vacunas'));

        if (datosDB === null) {
            this.vacunas = [];
        } else {
            this.vacunas = datosDB;
        }
    }
}
</script>

<style scoped>
.btn-azul {
    background-color: rgb(65, 198, 239);
    border-color: rgb(26, 186, 236);
}

.card-azul {
    border-color: rgb(26, 186, 236);
}

</style>