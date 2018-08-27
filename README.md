# Sailboat Statistics
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
| Arguments | Description |
| --- | --- |
| lwl | Length of waterline in feet |

### `getBallastDisplacementRatio(displacement, ballast)`
| Arguments | Description |
| --- | --- |
| displacement | Displacement in pounds |
| ballast | Ballast in pounds |

### `getDisplacementLengthRatio(displacement, lwl)`
| Arguments | Description |
| --- | --- |
| displacement | Displacement in pounds |
| lwl | Length of waterline in feet |

### `getSailAreaDisplacementRatio(sailArea, displacement)`
| Arguments | Description |
| --- | --- |
| sailArea | Sail area in square feet |
| displacement | Displacement in pounds |

### `getCapsizeRatio(beam, displacement)`
| Arguments | Description |
| --- | --- |
| beam | Beam in feet |
| displacement | Displacement in pounds |

### `getMotionComfort(loa, lwl, beam, displacment)`
| Arguments | Description |
| --- | --- |
| loa | Length overall in feet |
| lwl | Length of waterline in feet |
| beam | Beam in feet |
| displacement | Displacement in pounds |

## License
MIT License Copyright (c) 2018 Joel Colucci