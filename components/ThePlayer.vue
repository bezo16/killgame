<template>
  <section class="playerdiv" :style="`background:${color}`">

    <section class="buffs">
      <TheBuffs />
    </section>

    <section class="debuffs">
      <TheDebuffs />
    </section>

    <section>
      <TheHealth :health="health" />
    </section>

    <section class="avatar">
      <div>avatar
        <img src="~/assets/img/avatars/mage.png" alt="" :class="{rotate:rotate}">
      </div>
    </section>

    <section class="spells">
      <div>
        spells {{ id }}
      </div>
    </section>

  </section>
</template>

<script>
export default {
  props: {
    color: String,
    rotate: Boolean,
    id: String,
  },
  computed: {
    health() {
       return Number(this.$store.state.player[`health${this.id}`])
    }
  }
}
</script>

<style scoped>
    .playerdiv {
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }

    section {
      border: 1px solid grey;
    }

    .rotate {
      transform: rotateY(180deg);
    }
</style>