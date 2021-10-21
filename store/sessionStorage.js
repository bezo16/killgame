export const state = () => ({

    p1: {
        avatar: 'Mage',
        health: 100,
        turn: true,
        buffs: {},
        debuffs: {
            frostCurse: {duration: 0, dot: 0}
        },
    },
    p2: {
        avatar: 'Mage',
        health: 130,
        turn: false,
        buffs: {},
        debuffs: {
            frostCurse: {duration: 0, dot: 0}
        },
    },

})




export const mutations = {

    endTurn(state) {
        state.p1.turn = !state.p1.turn
        state.p2.turn = !state.p2.turn
    },

    attack(state,player) {
        if(player.id == 2) state.p1.health -= player.dmg
        else state.p2.health -= player.dmg
    },

    dot(state,player) {
        // FROST CURSE
        if(player == 2) {
            if(!state.p1.debuffs.hasOwnProperty('frostCurse')) state.p1.debuffs.frostCurse = {duration: 10000,dot: 1}  
            else state.p1.debuffs.frostCurse.dot++
            
        } else {
            if(!state.p2.debuffs.hasOwnProperty('frostCurse')) state.p2.debuffs.frostCurse = {duration: 10000,dot: 1}
            else state.p2.debuffs.frostCurse.dot++ 
        }
        // ANOTHER SPELL
    },

    endGame(state) {
        console.log('end game mut')
        state.p1.buffs = {}
        state.p2.buffs = {}
        state.p1.debuffs = {}
        state.p2.debuffs = {}
    }
}
