<template>
    <div >
        <span>{{this.cards}}</span>
        <div class="c-projectCard" v-show="cards" @click="changeView" >
            <h2 slot="projectTitle">{{projectTitle}}</h2>
            <p slot="projectDescription">{{projectDescription}}</p>
        </div>
        <div class="c-projectDetail" v-show="!cards">
            <h2 slot="projectTitle">{{projectTitle}}</h2>
            <p slot="projectDescription">{{projectDescription}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Project',
    data () {
        return{
            cards: true
        }
    },
    props: {
        projectTitle: String,
        projectDescription: String
    },
    methods: {
        changeView(){
            this.cards = false
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>