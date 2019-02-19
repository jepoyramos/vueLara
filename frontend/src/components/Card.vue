<template>
    <div class="c-card" @click="viewDetail">
        <h2 slot="cardTitle">{{cardTitle}}</h2>
        <p slot="cardDescription">{{cardDescription}}</p>
        <p slot="ID">{{ID}}</p>
    </div>
</template>
<script>
export default {
    name: 'Card',
    data () {
        return{
            cards: true
        }
    },
    props: {
        cardTitle: String,
        cardDescription: String,
        ID: Number
    },
    methods: {
        viewDetail(){
            this.$store.state.activeComponent = 'Project';
        },
        delItem(id){
            this.$emit('deleteItem', id);
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