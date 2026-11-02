import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import './styles/colors.css'
import './custom.css'
import './styles/containers.css'
import './styles/sumary.css'
import './styles/table.css'
import './styles/title.css'
import './styles/hero.css'
import './styles/sidebar.css'


import Layout from './Layout.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

import DropDown from './components/DropDown.vue'
import Color from './components/Color.vue'
import CardPane from './components/CardPane.vue'
import Card from './components/Card.vue'
import Cmd from './components/Cmd.vue'
import CmdPane from './components/CmdPane.vue'

import RequestJourney from './components/RequestJourney.vue'
import ObjetivosModulo from './components/ObjetivosModulo.vue'
import StackOficial from './components/StackOficial.vue'
import ButtonSlides from './components/ButtonSlides.vue'
import Objetivos from './components/Objetivos.vue'
import EnConstruccion from './components/EnConstruccion.vue'
import Quiz from './components/Quiz.vue'
import PhpRunner from './components/PhpRunner.vue';
import CollapsibleHeading from './components/CollapsibleHeading.vue';
import Ejercicio from "./components/ejercicios/Ejercicio.vue";
import TituloEjercicio from "./components/ejercicios/TituloEjercicio.vue";
import IndiceCurso   from "./components/IndiceCurso.vue";
import Footer   from "./components/Footer.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('RequestJourney', RequestJourney)
    app.component('ObjetivosModulo', ObjetivosModulo)
    app.component('StackOficial', StackOficial)
    app.component('ButtonSlides', ButtonSlides)
    app.component('Objetivos', Objetivos)
    app.component('EnConstruccion', EnConstruccion)
    app.component('Quiz', Quiz)
    app.component('DropDown', DropDown)
    app.component('Cmd', Cmd)
    app.component('CmdPane', CmdPane)
    app.component('Color', Color)
    app.component('CardPane', CardPane)
    app.component('Card', Card)
    app.component('PhpRunner', PhpRunner)
    app.component('CollapsibleHeading', CollapsibleHeading)
    app.component('Ejercicio', Ejercicio)
    app.component('TituloEjercicio', TituloEjercicio)
    app.component('IndiceCurso',IndiceCurso)
    app.component('Footer',Footer)
  },
} satisfies Theme
