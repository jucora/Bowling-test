updateScore = (frame) => {
  if (frame[1]) {
    return frame[0] + frame[1];
  }
  return frame[0];
};

isSpare = (frame) => {
  return frame[0] + frame[1] === 10;
};

isStrike = (frame) => {
  return frame[0] === 10;
};

spareBonus = (framesCollection, index) => {
  if (index === 9) {
    return framesCollection[index][2];
  } else {
    return framesCollection[index + 1][0];
  }
};

strikeBonus = (frames, index) => {
  let bonus = 0;
  if (isStrike(frames[index + 1])) {
    bonus = 10 + frames[index + 2][0];
  }
  if (index == 8) {
    bonus = 10 + frames[index + 1][0];
  }
  if (index == 9) {
    bonus = updateScore(frames[index], index);
  }
  return bonus;
};

calculateScore = (framesCollection) => {
  let score = 0;
  framesCollection.push([0, 0]); // Adding Bonus Spaces
  for (let i = 0; i < 10; i++) {
    let frame = framesCollection[i];
    if (isStrike(frame)) {
      score += 10 + strikeBonus(framesCollection, i);
    } else if (isSpare(frame)) {
      score += 10 + spareBonus(framesCollection, i);
    } else {
      score += updateScore(frame);
    }
  }
  return score;
};

module.exports = calculateScore;
