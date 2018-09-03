# Sailboat Statistics [![NPM version](https://img.shields.io/npm/v/sailboat-statistics.svg)](https://www.npmjs.com/package/sailboat-statistics)
> Functions to calculate common sailboat statistics

## Installation
```
# NPM
npm install sailboat-statistics --save

# Yarn
yarn add sailboat-statistics
```

## Getting Started
```javascript
import { getTheoreticalHullSpeed } from sailboat-statistics;

let lengthOfWaterline = 30;
let hullSpeed = getTheoreticalHullSpeed(lengthOfWaterline);

console.log(hullSpeed); // 7.34
```

## Documentation
### `getTheoreticalHullSpeed(lwl)`
| Parameters | Description |
| --- | --- |
| lwl | Length of waterline in feet |

### `getBallastDisplacementRatio(displacement, ballast)`
| Parameters | Description |
| --- | --- |
| displacement | Displacement in pounds |
| ballast | Ballast in pounds |

### `getDisplacementLengthRatio(displacement, lwl)`
| Parameters | Description |
| --- | --- |
| displacement | Displacement in pounds |
| lwl | Length of waterline in feet |

### `getSailAreaDisplacementRatio(sailArea, displacement)`
| Parameters | Description |
| --- | --- |
| sailArea | Sail area in square feet |
| displacement | Displacement in pounds |

### `getCapsizeRatio(beam, displacement)`
| Parameters | Description |
| --- | --- |
| beam | Beam in feet |
| displacement | Displacement in pounds |

### `getMotionComfort(loa, lwl, beam, displacment)`
| Parameters | Description |
| --- | --- |
| loa | Length overall in feet |
| lwl | Length of waterline in feet |
| beam | Beam in feet |
| displacement | Displacement in pounds |

## License
MIT License Copyright (c) 2018 Joel Colucci