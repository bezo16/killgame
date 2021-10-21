<template>
    <section class="spells">
        <button :disabled="turn" @click.stop="castSpell('frostArrow')" class="spell">FrostArrow</button>
    </section>
</template>

<script>
export default {
    props: {
        id: String,
    },
    computed: {
        turn() {
            return this.$store.state.player[`p${this.id}`].turn
        },
    },
    methods: {
        castSpell() {
            console.log('kastujem spelik ' + this.turn)
            this.$store.commit('player/attack',{id:this.id, dmg:25})
            this.$store.commit('player/endTurn')
        }
    }
}
</script>

<style scoped>
    .spells {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .spell {
        margin: 0px 15px;
        padding: 4px 8px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
</style>