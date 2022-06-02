import firUserHeart1 from '../data/heartrate/heartrate_136_0226_____1_.json';
import firUserHeart2 from '../data/heartrate/heartrate_136_0308_____1_.json';
import firUserHeart3 from '../data/heartrate/heartrate_136_0419_____1_.json';
import secUserHeart1 from '../data/heartrate/heartrate_328_0416_____2_.json';
import secUserHeart2 from '../data/heartrate/heartrate_328_0419_____2_.json';
import secUserHeart3 from '../data/heartrate/heartrate_328_0420_____2_.json';
import thirUserHeart1 from '../data/heartrate/heartrate_380_0417_____3_.json';
import thirUserHeart2 from '../data/heartrate/heartrate_380_0418_____3_.json';
import thirUserHeart3 from '../data/heartrate/heartrate_380_0419_____3_.json';

const heartData136 = [...firUserHeart1.reverse(), ...firUserHeart2.reverse(), ...firUserHeart3.reverse()];
const heartData328 = [...secUserHeart1.reverse(), ...secUserHeart2.reverse(), ...secUserHeart3.reverse()];
const heartData380 = [...thirUserHeart1.reverse(), ...thirUserHeart2.reverse(), ...thirUserHeart3.reverse()];

export default function getUserHeartInfo(memSeq: number) {
  return {
    136: heartData136,
    328: heartData328,
    380: heartData380,
  }[memSeq];
}
