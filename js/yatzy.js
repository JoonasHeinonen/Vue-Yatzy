new Vue({
    el: '#game',
    data: {
        timesThrow: 10,
        playerThrown: 0,
        opponentThrown: 0,
        opponentPoints: 0,
        playerPoints: 0,
        playGoing: true,
        degrees: 90,
        status: 'Roll the dice!'
    },
    methods: {
        throwDice: function(dice, number) {
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
        },
        enemyRollDice: function(argument) {
            var dice = document.getElementById(argument);
            var number = Math.floor(Math.random() * 6);
            this.animateRoll(argument);
            this.opponentThrown = number + 1;
            this.addScore(this.playerThrown, this.opponentThrown);
            this.throwDice(dice, number);
        },
        rollDice: function(argument) {
            if (this.playGoing) {
                this.playSound('sounds/dice.wav');
                var dice = document.getElementById(argument);
                var number = Math.floor(Math.random() * 6);
                this.animateRoll(argument);
                this.playerThrown = number + 1;
                this.timesThrow -= 1;
                this.enemyRollDice('dice-enemy');
                this.throwDice(dice, number);
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
            }
        },
        findWinner: function(pPoints, oPoints) {
            this.status = ' ';
            var sentence = "is the winner!";
            if (pPoints > oPoints) {
                this.status += "Player " + sentence;
                this.playSound('sounds/win.wav');
            } else if (oPoints > pPoints) {
                this.status += "Computer " + sentence;
                this.playSound('sounds/failure.wav');
            } else if (oPoints == pPoints) {
                this.status += "Game is even.";
            }
        },
        restart: function() {
            var dice = document.getElementById('dice');
            var diceEnemy = document.getElementById('dice-enemy');
            this.resetAll();
            this.animateRoll('dice');
            this.animateRoll('dice-enemy');
            dice.src = "graphics/dice_1.png";
            diceEnemy.src = "graphics/dice_1.png";
        },
        animateRoll: function(argument) {
            var dice = document.getElementById(argument);
            dice.style.transform = "rotate(" + this.degrees + "deg)";
            if (this.degrees > 180) {
                this.degrees = 0;
            }
            this.degrees += 90;
        },
        resetAll: function() {
            this.playSound('sounds/dice.wav');
            this.timesThrow = 10;
            this.playerThrown = 0;
            this.opponentThrown = 0;
            this.opponentPoints = 0;
            this.playerPoints = 0;
            this.playGoing = true;
            this.status = 'Roll the dice!';
        },
        playSound: function(sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        }
    },
    computed: {
        
    }
});