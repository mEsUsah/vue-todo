<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
header{
    background-color: rgb(0, 194, 0);
}
h1{
    margin: 0;
    padding: 20px;
    color: black;
}
</style>