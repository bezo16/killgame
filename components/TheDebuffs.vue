<template>
    <section class="buffs">
        <h1> {{ debuffs }} </h1>
    </section>
</template>

<script>
export default {
    computed: {
        debuffs() {
            return this.$store.state.sessionStorage[`p${this.id}`].debuffs
        }
    },
    props: {
        id: String,
    }
}
</script>

<style scoped>
    .buffs {
        height: 70px;
    }
</style>