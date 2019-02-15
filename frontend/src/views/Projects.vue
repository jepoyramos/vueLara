<template>
  <div class="c-projects">
    <h1>This is Projects View</h1>
    <ProjectGrid :projects="projects" @newProjectAdded="pushProject" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectGrid from '../components/Project/ProjectGrid.vue'

export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {projectTitle: "Project 1", projectDescription: "This is the first project"},
        {projectTitle: "Project 2", projectDescription: "This is the second project"},
      ],
    }
  },
  components: {
      ProjectGrid
  },
  methods: {
    pushProject(newProject){
      // alert('added project');
      // alert(newProject);
      this.projects.push(newProject);
      // console.log(newProject);
    }
  }
}
</script>
