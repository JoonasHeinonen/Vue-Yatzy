new Vue({
    el: '#game',
    data: {
        gameStarted: false,
        timesThrow: 10,
        playerThrown: 0,
        opponentThrown: 0,
        opponentPoints: 0,
        playerPoints: 0,
        playGoing: true
    },
    methods: {
        enemyRollDice: function(argument) {
            var dice = document.getElementById(argument);
            var number = Math.floor(Math.random() * 6);
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
            this.opponentThrown = number + 1;
            console.log("Your dice: " + this.playerThrown + " Opponent's dice: " + this.opponentThrown);
            this.addScore(this.playerThrown, this.opponentThrown);
        },
        rollDice: function(argument) {
            if (this.playGoing) {
                var dice = document.getElementById(argument);
                var number = Math.floor(Math.random() * 6);
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
                this.playerThrown = number + 1;
                this.timesThrow -= 1;
                this.enemyRollDice('dice-enemy');
                if (this.playGoing == true && this.timesThrow == 0) {
                    this.playGoing = false;
                    if (this.timesThrow <= 0) {
                        this.findWinner(this.playerPoints, this.opponentPoints);
                    }
                }
            }
        },
        addScore: function(pThrow, oThrow) {
            if (pThrow > oThrow) {
                this.playerPoints += 1;
            } else if (oThrow > pThrow) {
                this.opponentPoints += 1;
            } else if (oThrow == pThrow) {
                console.log('Even throws!');
            }
        },
        findWinner: function(pPoints, oPoints) {
            var sentence = ' ';
            if (pPoints > oPoints) {
                sentence += "Congratulations! You scored better than computer!";
            } else if (oPoints > pPoints) {
                sentence += "Computer won this round.";
            } else if (oPoints == pPoints) {
                sentence += "Game is even.";
            }
            alert(sentence);
        }
    },
    computed: {

    }
});