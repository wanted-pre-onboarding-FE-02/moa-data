import firUserHeart1 from '../data/heartrate/heartrate_136_0226_____1_.json';
import firUserHeart2 from '../data/heartrate/heartrate_136_0308_____1_.json';
import firUserHeart3 from '../data/heartrate/heartrate_136_0419_____1_.json';
import secUserHeart1 from '../data/heartrate/heartrate_328_0416_____2_.json';
import secUserHeart2 from '../data/heartrate/heartrate_328_0419_____2_.json';
import secUserHeart3 from '../data/heartrate/heartrate_328_0420_____2_.json';
import thirUserHeart1 from '../data/heartrate/heartrate_380_0417_____3_.json';
import thirUserHeart2 from '../data/heartrate/heartrate_380_0418_____3_.json';
import thirUserHeart3 from '../data/heartrate/heartrate_380_0419_____3_.json';

const heartData136 = [...firUserHeart1, ...firUserHeart2, ...firUserHeart3];
const heartData328 = [...secUserHeart1, ...secUserHeart2, ...secUserHeart3];
const heartData380 = [...thirUserHeart1, ...thirUserHeart2, ...thirUserHeart3];

export default function getUserHeartInfo(memSeq: number) {
  return {
    136: heartData136,
    328: heartData328,
    380: heartData380,
  }[memSeq];
}
