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
import axios from 'axios'

export default {
  name: 'Projects',
  data () {
    return {
      projects: [],
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
    //get projects from an api request
    axios.get('/projects.json')
      .then(res => {
        const data = res.data
        const projects = []
        for (let key in data){
          const project = data[key]
          project.id = key // assigns a key value to a created project key
          projects.push(project)
        }
        this.projects = projects
        // console.log(this.projects);
      })
      .catch(error => console.log(error))
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
          Title: this.projectTitle,
          Description:this.projectDescription
        }
      }
    }
  },
  methods: {
    pushProject(newProject){
      this.projects.push(newProject);
      console.log(newProject);
      axios.post('/projects.json', newProject)
      .then(res => console.log(res))
      .catch(error => console.log(error));
      this.loadComponent('ProjectGrid');
    },
    deleteItem(id){
      // this.projects.splice(id, 1);
      this.loadComponent('ProjectGrid');
      alert("Project deleted " + id);
      // console.log(this.projects);
      console.log(this.projects[id].id);
      axios.get('/projects.json'+ '/' + this.projects[id].id)
        .then( res => console.log(res))
        .catch(error => console.log(error))
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