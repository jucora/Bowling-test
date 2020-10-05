describe('calculateScore', () => {
  const calculateScore = require('./bowling');

  it('should return 0 when all frame values are zero', () => {
    var frames = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    expect(calculateScore(frames)).toEqual(0);
  });
  it('should return 90 when all frame values are 9 - 0', () => {
    var frames = [
      [9, 0],
      [9, 0],
      [9, 0],
      [9, 0],
      [9, 0],
      [9, 0],
      [9, 0],
      [9, 0],
      [9, 0],
      [9, 0],
    ];
    expect(calculateScore(frames)).toEqual(90);
  });

  it('should return 90 when all frame values are 9 - 0', () => {
    var frames = [
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5],
      [5, 5, 5],
    ];
    expect(calculateScore(frames)).toEqual(150);
  });

  it('should return 300 when all frame values are strike(using number)', () => {
    var frames = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10],
    ];
    expect(calculateScore(frames)).toEqual(300);
  });
});
