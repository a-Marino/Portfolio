<template>
    <div class="home">
        <!-- NAV -->
        <Nav/>
        <!-- MAIN DIV -->
        <Main/>
        <!-- ABOUT -->
        <About/>
        <!-- PROJECTS -->
        <Projects/>
        <!-- CONTACT -->
        <Contact/>
        <!-- REDES -->
        <Redes/>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Redes from '@/components/Redes.vue'

export default {
    name: 'Home',
    components: {
        Nav,
        Main,
        About,
        Projects,
        Contact,
        Redes
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@100;300;400;500;600;700;800&display=swap');

.home {
    color: #FFF;
    font-family: 'Be Vietnam', sans-serif;
}

.web {
    margin-top: 8px;
}

.stroke {
    color: #FFBB00;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #FFBB00;
    border-top: 8px solid #FFBB00;
}

.ABOUT {
    border-bottom: 15px solid #FFBB00;
}

.borde-top {
    border-top: 8px solid #FFBB00;
}

.projects-imgs:hover {
    filter: opacity(0.5);
}

.input {
    background-color: #212425;
    padding: 5px;
    outline: none;
    border-radius: 5px;
    border-bottom: 5px solid #FFBB00;
}

.input::placeholder {
    padding: 5px;
}

.sbm-btn {
    padding: 2px 20px;
    background-color: transparent;
    border: 2px solid #FFBB00;
    border-radius: 5px;
}

.redes {
    width: 40px;
    filter: opacity(.5);
}

.redes:hover {
    filter: opacity(.9);
}
</style>