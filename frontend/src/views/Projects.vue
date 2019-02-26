<template>
  <div class="c-projects">
    <h1>This is Projects View</h1>
    <!-- <ProjectGrid :projects="projects" @newProjectAdded="pushProject" /> -->
    <component :is="this.$store.getters.getActiveComponent"  v-bind="activeCompProps"  @newProjectAdded="pushProject"></component>
    <hr>
    <span >{{this.$store.getters.getActiveComponent}}</span>
    <div v-if="this.$store.getters.getActiveComponent == 'ProjectGrid'" class="o-projects__button">
        <div @click="loadComponent('ProjectCreate')">Add Project</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectGrid from '../components/Project/ProjectGrid.vue'
import ProjectCreate from '../components/Project/ProjectCreate.vue'
import Project from '../components/Project/Project.vue'
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {projectTitle: "Project 1", projectDescription: "This is the first project"},
        {projectTitle: "Project 2", projectDescription: "This is the second project"},
      ],
      cardId: '',
      cardTitle: '',
      cardDescription: '',
      projectTitle: '',
      projectDescription: ''
    }
  },
  created(){
    this.$eventHub.$on('cardClicked', this.clickedACard);
    this.$eventHub.$on('returnGrid', this.loadComponent);
    this.$eventHub.$on('deleteProject', this.deleteItem);
    this.$eventHub.$on('updateProject', this.updateItem);
  },
  beforeDestroy(){
    this.$eventHub.$off('cardClicked');
    this.$eventHub.$off('returnGrid');
    this.$eventHub.$off('deleteProject');
  },
  components: {
    ProjectGrid: ProjectGrid,
    ProjectCreate,
    Project
  },
  computed: {
    activeCompProps(){
      if(this.$store.getters.getActiveComponent === 'ProjectGrid'){
        return { projects: this.projects}
      }else if(this.$store.getters.getActiveComponent === 'Project'){
        return {
          ID: this.cardId,
          Title: this.cardTitle,
          Description: this.cardDescription,
        }
      }else{
        // alert(this.projectTitle);
        return {
          projectTitle: this.projectTitle,
          projectDescription:this.projectDescription
        }
      }
    }
  },
  methods: {
    pushProject(newProject){
      this.projects.push(newProject);
      this.loadComponent('ProjectGrid');
    },
    deleteItem(id){
      this.projects.splice(id, 1);
      this.loadComponent('ProjectGrid');
      alert("Project deleted " + id);
    },
     updateItem(id){
       alert('item number ' + id);
      this.projectTitle = this.projects[id].projectTitle,
      this.projectDescription = this.projects[id].projectDescription
      this.loadComponent('ProjectCreate');
    },
    clickedACard(id){
      this.cardId = id;
      this.cardTitle = this.projects[id].projectTitle;
      this.cardDescription = this.projects[id].projectDescription;
    },
    loadComponent(comp){
      // this.$store.state.activeComponent = comp;
      this.$store.dispatch("set_activeComponent",comp); //dispatch an action
    }
  }
}
</script>
<style lang="scss" scoped>
  .o-projects__button{
    display: block;
    cursor: pointer;
    padding: 20px 40px;
    border: solid 1px #696969;
		border-radius: 5px;
		margin: 5px;
    text-decoration: none;
    color: #323659;
  }
</style>