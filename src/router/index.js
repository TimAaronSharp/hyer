import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Reunion from '../components/Reunion'
import FamilyTree from '../components/FamilyTree'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },{
            path:'/Reunion',
            name:'Reunion',
            component:Reunion
        },{
            path:'/FamilyTree',
            name:'FamilyTree',
            component:FamilyTree
        }
    ]
})