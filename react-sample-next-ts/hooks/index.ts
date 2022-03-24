import _useResize from './useResize';
import _useScroll from './useScroll';

const hooks: any = {
  useResize: _useResize,
  useScroll: _useScroll,
}

export const useResize = hooks.useResize;
export const useScroll = hooks.useScroll;

export default hooks;