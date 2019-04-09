new Vue({
    el: '#game',
    data: {
        gameStarted: false,
        playedGames: 0
    },
    methods: {
        rollDice: function() {
            var dice = document.getElementById('dice');
            var number = Math.floor(Math.random() * 5);
            switch (number) {
                case 0:
                    dice.src = "graphics/dice_1.png";
                    break;
                case 1:
                    dice.src = "graphics/dice_2.png";
                    break;
                case 2:
                    dice.src = "graphics/dice_3.png";
                    break;
                case 3:
                    dice.src = "graphics/dice_4.png";
                    break;
                case 4:
                    dice.src = "graphics/dice_5.png";
                    break;
                case 5:
                    dice.src = "graphics/dice_6.png";
                    break;
                default:
                    break;
            }
        }
    },
    computed: {

    }
});