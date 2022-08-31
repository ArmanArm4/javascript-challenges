"This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.";
"node TracktheRobot.js";

function trackRobot(...steps) {
  let output = [0, 0];
  let totalSteps = steps.length;

  for (let i = 0; i < totalSteps; i++) {
    let l = i;
    let lessThanFour = () => {
      if (l >= 4) {
        l = l - 4;
        lessThanFour();
      }
    };
    lessThanFour();
    if (l === 0) {
      output[1] += steps[i];
    }
    if (l === 1) {
      output[0] += steps[i];
    }
    if (l === 2) {
      output[1] -= steps[i];
    }
    if (l === 3) {
      output[0] -= steps[i];
    }
  }
  return output;
}
trackRobot(1, 2, 3, 4, 5);
