$(document).ready(function() {

    var getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var randomNum = getRandomNumber(19, 120);
    $("#randomNumberText").text(randomNum);
    
    var redCrystalNum = getRandomNumber(1, 12);
    var blueCrystalNum = getRandomNumber(1, 12);
    var yellowCrystalNum = getRandomNumber(1, 12);
    var greenCrystalNum = getRandomNumber(1, 12);

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    function resetGame() {
        score = 0;
        totalScore = 0;
        $("#totalScoreText").text(totalScore);
        randomNum = getRandomNumber(19, 120);
        $("#randomNumberText").text(randomNum);
        redCrystalNum = getRandomNumber(1, 12);
        blueCrystalNum = getRandomNumber(1, 12);
        yellowCrystalNum = getRandomNumber(1, 12);
        greenCrystalNum = getRandomNumber(1, 12);
       
    }

    function checkForWin() {
        if (totalScore === randomNum) {
            wins++;
            $("#winsText").text("Wins: " + wins);
            resetGame();
        } else if (totalScore > randomNum) {
            losses++;
            $("#lossesText").text("Losses: " + losses);
            resetGame();
        }
    }

    $("#redCrystalBtn").on("click", function() {
        totalScore += redCrystalNum;
        $("#totalScoreText").text(totalScore);
        checkForWin();
    });

    $("#blueCrystalBtn").on("click", function() {
        totalScore += blueCrystalNum;
        $("#totalScoreText").text(totalScore);
        checkForWin();
    });

    $("#yellowCrystalBtn").on("click", function() {
        totalScore += yellowCrystalNum;
        $("#totalScoreText").text(totalScore);
        checkForWin();
    });

    $("#greenCrystalBtn").on("click", function() {
        totalScore += greenCrystalNum;
        $("#totalScoreText").text(totalScore);
        checkForWin();
    });
});