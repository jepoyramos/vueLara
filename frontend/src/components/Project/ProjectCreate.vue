<template>
    <div class="o-projectAdd">
        <form>
            <input type="text" v-model="newProject.projectTitle" placeholder="Project Title">
            <textarea name="" id="" cols="30" rows="10" v-model="newProject.projectDescription" placeholder="Project Description"></textarea>
            <button @click.prevent="createProject">Create Project</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'ProjectCreate',
    data () {
        return{
            newProject: {
                projectTitle: '',
                projectDescription: ''
            },
            isCreated: false
        }
    },
    props: {
        projectTitle: String,
        projectDescription: String
    },
    methods: {
        createProject(){
            if(this.newProject.projectTitle == ''){
                alert('Please insert a Project Title');
            }else{
                const x = {... this.newProject};
                this.$emit('newProjectAdded', x);
                this.newProject.projectTitle = '';
                this.newProject.projectDescription = '';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    input, textarea{
        display: block;
        margin: 10px auto;
        padding: 5px;
        width: 250px;
    }
    button{
        cursor: pointer;
    }
</style>