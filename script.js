const levels = [
    { answer: 'lego', video: 'cube.mp4' },
    { answer: 'cube', video: 'planet.mp4' },
    { answer: 'planet', video: '' } 
];


function check(event) {
    event.preventDefault();
    let score = document.getElementById('score');
    let level = document.getElementById('level'); 
    const inputValue = event.target.userAnswer.value;
    const video = document.getElementById('videoPlayer');
    level.max = levels.length;
    const currentLevel = Number(level.value);

    if (currentLevel < levels.length && inputValue == levels[currentLevel].answer) {
        alert("Answer correct");
        score.value = Number(score.value) + 1;
        level.value = Number(level.value) + 1; // Move to next level

        if (levels[currentLevel].video) {
            video.children[0].src = levels[currentLevel].video;
            video.load();
        }
          if (currentLevel === levels.length) {
            alert("🎉 You've completed all levels!");
        }
    } else {
        score.value = Number(score.value) - 1;
        alert("Answer incorrect or wrong level!");
    }

      
    return false;
}
