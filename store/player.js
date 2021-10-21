export const state = () => ({

    p1: {
        avatar: 'Mage',
        health: 100,
        turn: true,
    },
    p2: {
        avatar: 'Mage',
        health: 120,
        turn: false,
    },

})


export const mutations = {
    endTurn(state) {
        state.p1.turn = !state.p1.turn
        state.p2.turn = !state.p2.turn
    },

    attack(state,player) {
        console.log(player.id)
        if(player.id == 2) state.p1.health -= player.dmg
        else state.p2.health -= player.dmg
    }
}
