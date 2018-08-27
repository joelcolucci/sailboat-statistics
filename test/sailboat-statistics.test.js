import {
  getTheoreticalHullSpeed,
  getBallastDisplacementRatio,
  getDisplacementLengthRatio,
  getSailAreaDisplacementRatio,
  getCapsizeRatio,
  getMotionComfort
} from '../lib/index';


describe('Sailboat statistics', () => {
  test('getTheoreticalHullSpeed', () => {
    let lwl = 25.83;
    let hullSpeedExpected = 6.810311887131161;

    let hullSpeedResult = getTheoreticalHullSpeed(lwl);

    expect(hullSpeedResult).toEqual(hullSpeedExpected);
  });

  test('getBallastDisplacementRatio', () => {
    let displacement = 19500;
    let ballast = 8287;
    let ballastDisplacementRatioExpected = 0.424974358974359;

    let ballastDisplacementRatioResult =
      getBallastDisplacementRatio(displacement, ballast);

    expect(ballastDisplacementRatioResult)
      .toEqual(ballastDisplacementRatioExpected);
  });

  test('getDisplacementLengthRatio', () => {
    let displacement = 19500;
    let lwl = 25.83;
    let displacementLengthRatioExpected = 505.141877995885;

    let displacementLengthRatioResult =
      getDisplacementLengthRatio(displacement, lwl);

    expect(displacementLengthRatioResult)
      .toEqual(displacementLengthRatioExpected);
  });

  test('getSailAreaDisplacementRatio', () => {
    let displacement = 19500;
    let sailArea = 544;
    let sailAreaDisplacementRatioExpected = 12.01422630143788;

    let sailAreaDisplacementRatioResult =
      getSailAreaDisplacementRatio(sailArea, displacement);

    expect(sailAreaDisplacementRatioResult)
      .toEqual(sailAreaDisplacementRatioExpected);
  });

  test('getCapsizeRatio', () => {
    let beam = 10.5;
    let displacement = 19500;
    let capsizeRatioExpected = 1.560406509142686;

    let capsizeRatioResult = getCapsizeRatio(beam, displacement);

    expect(capsizeRatioResult).toEqual(capsizeRatioExpected);
  });

  test('getMotionComfort', () => {
    let loa = 33;
    let lwl = 25.83;
    let beam = 10.5;
    let displacement = 19500;
    let motionComfortExpected = 43.74523983616077;

    let motionComfortResult = getMotionComfort(loa, lwl, beam, displacement);

    expect(motionComfortResult).toEqual(motionComfortExpected);
  });
});
