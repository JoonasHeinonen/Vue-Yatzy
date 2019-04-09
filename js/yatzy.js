new Vue({
    el: '#game',
    data: {
        gameStarted: false,
        timesThrown: 0,
        throw: 0
    },
    methods: {
        rollDice: function() {
            var dice = document.getElementById('dice');
            var number = Math.floor(Math.random() * 5);
            this.throw = number;
            console.log("Value of the latest throw: " + ( 1+ this.throw));
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
            this.timesThrown += 1;
        }
    },
    computed: {

    }
});