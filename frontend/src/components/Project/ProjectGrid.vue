<template>
    <div class="c-projectsGrid">
        <Project 
            v-for='(project, index) in projects' 
            :key="index" 
            :projectTitle= project.projectTitle
            :projectDescription= project.projectDescription
            class="o-projectGrid__project"
            />
    </div>
</template>
<script>
import Project from './Project.vue'
export default {
    name: 'ProjectGrid',
    components: {
        Project
    },
    props: ['projects']
}
</script>
<style lang="scss" scoped>
    .o-projectGrid__project{
        display: inline-block;
        vertical-align: middle;
        padding: 20px 40px;
        border: solid 1px #696969;
		border-radius: 5px;
		margin: 5px;
        text-decoration: none;
        color: #323659;
    }
</style>