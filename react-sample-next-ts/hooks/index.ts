import _useResize from './useResize';
import _useScroll from './useScroll';
import _useInfiniteScroll from './useInfiniteScroll';

const hooks: any = {
  useResize: _useResize,
  useScroll: _useScroll,
  useInfiniteScroll: _useInfiniteScroll,
}

export const useResize = hooks.useResize;
export const useScroll = hooks.useScroll;
export const useInfiniteScroll = hooks.useInfiniteScroll;

export default hooks;