<template>
    <div >
        <button @click="back">Back</button>
        <button @click="deleteProject(ID)">Delete</button>
        <button @click="updateProject(ID)">Update</button>
        <div class="c-project">
            <h2 slot="projectTitle">{{Title}}</h2>
            <p slot="projectDescription">{{Description}}</p>
            <p slot="projectID">{{ID}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Project',
    props: {
        Title: String,
        Description: String,
        ID: Number
    },
    methods:{
        back(){
            this.$eventHub.$emit('returnGrid', 'ProjectGrid');
        },
        deleteProject(ID){
            this.$eventHub.$emit('deleteProject', ID);
        },
        updateProject(ID){
            alert('update' + ID);
            this.$eventHub.$emit('updateProject', ID);
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>