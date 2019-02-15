<template>
    <div class="c-projects">
        <div v-show="!projectAdd" class="o-projectsList">
            <Project 
                v-for='(project, index) in projects' 
                :key="index" 
                :projectTitle= project.projectTitle
                :projectDescription= project.projectDescription
                class="o-projectList__project"
                />
            <hr>
            <div class="o-projectList__createProject">
                <div @click="addProject">Add Project</div>
            </div>
        </div>
        
        <div v-show="projectAdd" class="o-projectAdd">
            <form>
                <input type="text" v-model="newProject.projectTitle">
                <textarea name="" id="" cols="30" rows="10" v-model="newProject.projectDescription"></textarea>
                <button @click.prevent="createProject">Create Project</button>
            </form>
        </div>
    </div>
</template>
<script>
import Project from './Project.vue'
export default {
    name: 'ProjectGrid',
    data (){
        return{
            projectAdd: false,
            newProject: {
                projectTitle: '',
                projectDescription: ''
            },
            isCreated: false
        }
    },
    components: {
        Project
    },
    props: ['projects'],
    methods: {
        addProject(){
            this.projectAdd = true
        },
        createProject(){
            if(this.newProject.projectTitle == ''){
                alert('Please insert a Project Title');
            }else{
                const x = {... this.newProject};
                this.$emit('newProjectAdded', x);
                this.projectAdd = false;
                this.newProject.projectTitle = '';
                this.newProject.projectDescription = '';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .o-projectList__project, .o-projectList__createProject{
        display: inline-block;
        padding: 20px 40px;
        border: solid 1px #696969;
		border-radius: 5px;
		margin: 5px;
        text-decoration: none;
        color: #323659;
    }
    .o-projectList__createProject{
        display: block;
        cursor: pointer;
    }
</style>