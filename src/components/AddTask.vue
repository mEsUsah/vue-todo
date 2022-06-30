<template>
    <label for="task">Task</label>
    <input type="text" name="task" v-model="task">
    <button @click="addItem">Add</button>

</template>

<script>
export default{
    emits: ['add-item'],
    data(){
        return{
            task: ""
        }
    },
    methods: {
        addItem(){
            this.$emit('add-item', this.task);
        }
    }
}
</script>