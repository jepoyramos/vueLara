<template>
    <div >
        <div class="c-projectCard">
            <h2 slot="projectTitle">{{projectTitle}}</h2>
            <p slot="projectDescription">{{projectDescription}}</p>
        </div>
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