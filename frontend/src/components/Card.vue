<template>
    <div class="c-card" @click="clicked(ID)"> 
        <h2 slot="cardTitle">{{cardTitle}}</h2>
        <p slot="cardDescription">{{cardDescription}}</p>
        <p slot="ID">{{ID}}</p>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        cardTitle: String,
        cardDescription: String,
        ID: Number
    },
    methods: {
        clicked(id){
            this.$store.state.activeComponent = 'Project';
            this.$eventHub.$emit('cardClicked', id);
        }
    } 
}
</script>
<style lang="scss" scoped>
    .c-card{
        display: inline-block;
        vertical-align: middle;
        padding: 20px 40px;
        border: solid 1px #696969;
		border-radius: 5px;
		margin: 5px;
        text-decoration: none;
        color: #323659;
        cursor: pointer;
    }
</style>