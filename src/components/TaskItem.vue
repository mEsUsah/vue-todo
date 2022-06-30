<template>
    <div>
        <p>{{ task }}</p>
        <button @click="deleteTask(id)">X</button>
    </div>
</template>

<script>
export default{
    props: ['id','task'],
    emits: ['delete-task'],
    methods: {
        deleteTask(taskId){
            this.$emit('delete-task', taskId);
        }
    }
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    
}
div:not(:last-of-type){
    border-bottom: 1px solid white;
}
p{
    margin: 0;
}

</style>