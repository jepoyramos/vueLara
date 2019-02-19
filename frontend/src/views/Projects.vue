<template>
  <div class="c-projects">
    <h1>This is Projects View</h1>
    <!-- <ProjectGrid :projects="projects" @newProjectAdded="pushProject" /> -->
    <component :is="this.$store.state.activeComponent"  v-bind="activeCompProps"   @newProjectAdded="pushProject" @changeActComp="viewDetail" @deleteItem="deleteProject"></component>
    <hr>
    <span >{{this.$store.state.activeComponent}}</span>
    <div v-if="this.$store.state.activeComponent == 'ProjectGrid'" class="o-projects__button">
        <div @click="addProject">Add Project</div>
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
      // activeComponent: 'ProjectGrid'
    }
  },
  components: {
    ProjectGrid: ProjectGrid,
    ProjectCreate,
    Project
  },
  computed: {
    activeCompProps(){
      if(this.$store.state.activeComponent === 'ProjectGrid'){
        return { projects: this.projects}
      }else{
        return {projects: ''}
      }
    }
  },
  methods: {
    addProject(){
      // this.activeComponent = 'ProjectCreate'
      this.$store.state.activeComponent = 'ProjectCreate'
    },
    pushProject(newProject){
      this.projects.push(newProject);
      this.$store.state.activeComponent = 'ProjectCreate';
      this.$store.state.activeComponent = 'ProjectGrid';
    },
    deleteProject(id){
      alert(id);
    },
    viewDetail(){
      this.activeComponent = 'Project';
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