<template>
    <the-header title="Todo's"></the-header>
    <base-card>
        <add-task @add-item="addTask"></add-task>
    </base-card>
    <base-card>
        <task-item 
            v-for="task in pendingTasks" 
            :key="task.id"
            :id="task.id"
            :task="task.title"
            @delete-task="deleteTask"
            @complete-task="completeTask"
        >
        </task-item>
    </base-card>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BaseCard from './components/BaseCard.vue';
import TaskItem from './components/TaskItem.vue';
import AddTask from './components/AddTask.vue';

export default {
  data(){
    return{
        tasks: [
            {
                id: 1,
                title: "first",
                pending: true
            },
            {
                id: 2,
                title: "second",
                pending: true
            },
            {
                id: 3,
                title: "third",
                pending: true
            },
        ]
    }
  },
  computed: {
    pendingTasks(){
        return this.tasks.filter(task => task.pending === true);
    }
  },
  methods: {
    addTask(task){
        const taskId = new Date().toISOString();
        this.tasks.unshift({
            id: taskId,
            title: task
        });
    },
    deleteTask(taskId){
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        this.tasks.splice(taskIndex,1);
    },
    completeTask(taskId){
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        this.tasks[taskIndex].pending = false;
    }
  },
  components: { TheHeader, BaseCard, TaskItem, AddTask }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap');
body{
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-color: rgb(182, 182, 182);
}
</style>