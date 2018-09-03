/**
 * @param {*} lwl Length of waterline
 * @return {Number}
 */
function getTheoreticalHullSpeed(lwl) {
  return Math.sqrt(lwl) * 1.34;
}

/**
 * @param {*} displacement Displacement in pounds
 * @param {*} ballast Ballast in pounds
 * @return {Number}
 */
function getBallastDisplacementRatio(displacement, ballast) {
  return ballast / displacement;
}

/**
 * @param {*} displacement Displacement in pounds
 * @param {*} lwl Length of waterline
 * @return {Number}
 */
function getDisplacementLengthRatio(displacement, lwl) {
  const LONG_TON_IN_POUNDS = 2240;
  let displacementInLongTons = displacement / LONG_TON_IN_POUNDS;
  return displacementInLongTons / Math.pow((0.01 * lwl), 3);
}

/**
 * @param {*} sailArea Sail area in square feet
 * @param {*} displacement Displacement in pounds
 * @return {Number}
 */
function getSailAreaDisplacementRatio(sailArea, displacement) {
  return sailArea / Math.pow((displacement / 64), (2/3));
}

/**
 * @param {*} beam Beam in feet
 * @param {*} displacement displacement in pounds
 * @return {Number}
 */
function getCapsizeRatio(beam, displacement) {
  let displacementInCubicFeet = displacement / 64;
  return beam / Math.cbrt(displacementInCubicFeet);
}

/**
 * @param {*} loa Length overall in feet
 * @param {*} lwl Length of waterline in feet
 * @param {*} beam Beam in feet
 * @param {*} displacement Displacement in pounds
 * @return {Number}
 */
function getMotionComfort(loa, lwl, beam, displacement) {
  let adjustedLwl = (7/10) * lwl;
  let adustedLoa = (1/3) * loa;
  let adjustedBeam = Math.pow(beam, (4/3));
  let denominator = (2/3) * (adjustedLwl + adustedLoa) * adjustedBeam;

  return displacement / denominator;
}

export {
  getTheoreticalHullSpeed,
  getBallastDisplacementRatio,
  getDisplacementLengthRatio,
  getSailAreaDisplacementRatio,
  getCapsizeRatio,
  getMotionComfort
};
