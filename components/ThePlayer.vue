<template>
  <section class="playerdiv" :style="`background:${color}`">

    <section class="buffs">
      <TheBuffs :id="id" />
    </section>

    <section class="debuffs">
      <TheDebuffs :id="id" />
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
      <TheSpells :id="id" />
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
       return Number(this.$store.state.sessionStorage[`p${this.id}`].health)
    }
  }
}
</script>

<style scoped>
    .playerdiv {
        padding: 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }

    section {
      border: 1px solid grey;
    }

    .avatar {
      height: 200px;
    }

    img {
      height: 100px;
    }

    .rotate {
      transform: rotateY(180deg);
    }
</style>