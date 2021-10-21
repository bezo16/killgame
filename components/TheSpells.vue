<template>
    <section class="spells">
        <button :disabled="turn" @click.stop="castSpell('frostArrow')" class="spell">Frost arrow</button>
        <button :disabled="turn" @click.stop="castSpell('frostCurse')" class="spell">Frost curse</button>
    </section>
</template>

<script>
export default {
    props: {
        id: String,
    },
    computed: {
        turn() {
            return this.$store.state.sessionStorage[`p${this.id}`].turn
        },
    },
    methods: {
        castSpell(spell) {
            if(spell === 'frostArrow') {
                this.$store.commit('sessionStorage/attack',{id:this.id, dmg:25})
            }
            if(spell === 'frostCurse') {
                this.$store.commit('sessionStorage/dot',this.id)
            }



            console.log(this.$store.state.sessionStorage[`p${this.id}`].debuffs.frostCurse)
            this.$store.commit('sessionStorage/endTurn')
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