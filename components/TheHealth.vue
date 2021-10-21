<template>
    <section class="health">
        <h1> {{ health }}hp </h1>
    </section>
</template>

<script>
export default {
    props: {
        health: Number,
    }
}
</script>

<style scoped>
    .health {
        height: 40px;
    }
</style>