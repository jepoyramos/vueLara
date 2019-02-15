<template>
    <div>
        <h2 slot="projectTitle">{{projectTitle}}</h2>
        <p slot="projectDescription">{{projectDescription}}</p>
    </div>
</template>
<script>
export default {
    name: 'Project',
    props: {
        projectTitle: String,
        projectDescription: String
    }
}
</script>
<style lang="scss" scoped>
    
</style>