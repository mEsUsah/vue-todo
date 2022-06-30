<template>
    <div>
        <p>{{ task }}</p>
        <div>
            <button v-if="complete" @click="deleteTask(id)">Delete</button>
            <button v-if="complete" @click="activateTask(id)">Activate</button>
            <button v-else @click="completeTask(id)">Complete</button>
        </div>
    </div>
</template>

<script>
export default{
    props: ['id','task','complete'],
    emits: ['delete-task','complete-task'],
    methods: {
        deleteTask(taskId){
            this.$emit('delete-task', taskId);
        },
        completeTask(taskId){
            this.$emit('complete-task', taskId);
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