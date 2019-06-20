import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data = [{child:"John", parent:""},
                {child:"Aaron", parent:"Kevin"},
                {child:"Kevin", parent:"John"},
                {child:"Hannah", parent:"Ann"},
                {child:"Rose", parent:"Sarah"},
                {child:"Ann", parent:"John"},
                {child:"Sarah", parent:"Kevin"},
                {child:"Mark", parent:"Ann"},
                {child:"Angel", parent:"Sarah"}
            ]
        // familyTree: {
        //     gen1: {
        //         family1 =['Andrew Lars Hyer', 'Elizabeth Helen Telford'],
        //         family2 =['Lorenzo Petersen', 'Eliza Balls'],
        //         family3 =['Jorgen Clausenius Jeppeson Fabricius', 'Caroline Dorthea Olsen'],
        //         family4 =['William Frederick Rigby', 'Sarah Angeline Clarke']
        //     },
        //     gen2: {
        //         family1 =['John Christian Hyer', 'Maud Petersen'],
        //         family2 =['Knute Fabricius', 'Orpah Vendeline Rigby']
        //     },
        //     gen3: {
        //         family1 =['Wendell Claire Hyer', 'Yvonne Fabricius']
        //     },
        //     gen4: {
        //         family1 =['Cathy Hyer', 'Edgardo Rodriguez'],
        //         family2 =['Joelle Hyer', 'Gaylin Sharp'],
        //         family3 =['Daniel Fabricius Hyer', 'Pam ???'],
        //         family4 =['Rebecca Hyer', 'Courtney Tuft'],
        //         family5 =['Mark Claire Hyer', 'Debbie ???'],
        //         family6 =['Susan Hyer', 'Denis Hendricks'],
        //         family7 =['Jane Hyer'],
        //         family8 =['Matthew John Hyer', 'Trudy Ward']
        //     },
        //     gen5: {
        //         rodriguez: {
        //             family1 =['Cynthia Rodriguez', 'Zach Woolsey'],
        //             family2 =['Nefi Rodriguez', 'Sasha ???'],
        //             family3 =['Diana Rodriguez', 'Andrew ???'],
        //             family4 =['Zeniff Rodriguez'],
        //             family5 =['Mosiah Rodriguez', 'Anna ???'],
        //             family6 =['Rosana Rodriguez']
        //         }, sharp: {
        //             family1 =['Ryan Anthony Sharp', 'Shauna Thacker'],
        //             family2 =['Stephanie Lynn Sharp', 'Adam Ames'],
        //             family3 =['Cameron Royal Sharp', 'Chiaki Umeki'],
        //             family4 =['Timothy Aaron Sharp']
        //         }, danHyer: {
        //             family1 =['John Hyer', '???'],
        //             family2 =['Heather Hyer', 'Aaron Carter'],
        //             family3 =['Jennifer Hyer'],
        //             family4 =['Kevin Hyer', 'Megan ???'],
        //             family5 =['Scott Hyer', 'Jenny ???']
        //         }, tuft: {
        //             family1 =['Josh Tuft', '???'],
        //             family2 =['Angie Tuft'],
        //             family3 =['Jason Tuft', '???'],
        //             family4 =['Nathan Tuft', 'Shauna ???'],
        //             family5 =['Travis Tuft', '???']
        //         },
        //         markHyer: {
        //             family1 =['Justin Hyer'],
        //             family2 =['Steven Hyer', '???'],
        //             family3 =['Randy Hyer', '???'],
        //             family4 =['Kyle Hyer', 'Lauralie? ???'],
        //             family5 =['Kimberly Hyer', 'Jake Overall']
        //         },
        //         susanHyer: {
        //             family1 =['JoAnn Hendricks', 'Ben ???'],
        //             family2 =['Stacey Hendricks', 'Moroni Ashby'],
        //             family3 =['Laura Hendricks', 'Zane Wheatley'],
        //             family4 =['Betty Jo Hendricks', 'Sterling Anderson']
        //         },
        //         matthewHyer: {
        //             family1 =['Jake Hyer', 'Jennifer ???'],
        //             family2 =['Melissa Hyer'],
        //             family3 =['Riley Hyer'],
        //             family4 =['Miranda Hyer', '???'],
        //             family5 =['Jed Hyer'],
        //             family6 =['Rhett Hyer'],
        //             family7 =['Stockton Hyer']
        //         }
        //     }
        // }
    },
    mutations: {

    },
    actions: {
        getTree({ commit, dispatch }) {

        }
    }

})