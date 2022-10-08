// !自动生成文件(by taro3-vue3-iconfont)，别动！
import { DefineComponent, App } from 'vue';

interface Props {
  name: 'icon-music-1' | 'icon-music-2' | 'icon-mine';
  size?: number | string;
  fill?: string;
}

declare const Iconfont: DefineComponent<Props> & {
  install: (app: App) => void;
};

export default Iconfont;

// volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Iconfont: DefineComponent<{
      name: 'icon-music-1' | 'icon-music-2' | 'icon-mine';
      size?: number | string;
      fill?: string;
    }>;
  }
}
