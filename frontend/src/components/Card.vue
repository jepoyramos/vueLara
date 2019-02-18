<template>
    <div class="c-projectCard" @click="changeView" >
        <h2 slot="projectTitle">{{projectTitle}}</h2>
        <p slot="projectDescription">{{projectDescription}}</p>
    </div>
</template>
<script>
export default {
    name: 'Card',
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