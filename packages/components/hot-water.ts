import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 00460.8 785.067h102.4a187.733 187.733 0 00187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0134.133 34.134v221.866a256 256 0 01-256 256H460.8a256 256 0 01-256-256V375.467a34.133 34.133 0 0134.133-34.134zM512 34.133a34.133 34.133 0 0134.133 34.134v170.666a34.133 34.133 0 01-68.266 0V68.267A34.133 34.133 0 01512 34.133zM375.467 102.4a34.133 34.133 0 0134.133 34.133v102.4a34.133 34.133 0 01-68.267 0v-102.4a34.133 34.133 0 0134.134-34.133zm273.066 0a34.133 34.133 0 0134.134 34.133v102.4a34.133 34.133 0 11-68.267 0v-102.4a34.133 34.133 0 0134.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 110 68.267H170.667a34.133 34.133 0 110-68.267z'

const HotWater = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

HotWater.displayName = 'HotWater';

export default HotWater;
