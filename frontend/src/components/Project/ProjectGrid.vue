<template>
    <div class="c-projectsGrid">
        <Card
            v-for='(project, index) in projects' 
            :key="index" 
            :ID="index"
            :cardTitle= project.projectTitle
            :cardDescription= project.projectDescription
            />
    </div>
</template>
<script>
import Card from '../Card.vue'

export default {
    name: 'ProjectGrid',
    components: {
        Card
    },
    props: ['projects'],
}
</script>
<style lang="scss" scoped>
</style>