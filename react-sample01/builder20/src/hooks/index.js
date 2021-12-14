import _react from 'react'
import { IS_BROWSER } from '_constants'
import { useLocation } from 'react-router-dom'
import _useReactRouter from 'use-react-router'
import { reduxDispatch, reduxSelector, reduxStore, reduxShallowEqual } from './reduxHooks'
import _useScrollHit from './useScrollHit'

// TODO. https://www.npmjs.com/package/@use-hook/use-cookie

const useIsomorphicLayoutEffect = IS_BROWSER ? _react.useLayoutEffect : _react.useEffect;
// useEffect : 화면의 변경이 감지되는 모든 케이스에 호출됨 (props 변경, 각 상태별 변경 등등) -> DOM 조작을 하더라도 관찰이 안되는 경우에 사용
// useLayoutEffect : 브라우저 환경에서만 사용가능, 최종 랜더링 (dom 변경 완료) 후 호출됨 -> DOM 조작이나 측정이 필요할 경우에 사용

const hooks = {
  useState: _react.useState, 
  useEffect: _react.useEffect,
  useLayoutEffect: useIsomorphicLayoutEffect,
  useContext: _react.useContext,
  useReducer: _react.useReducer,
  useCallback: _react.useCallback,
  useMemo: _react.useMemo,
  useRef: _react.useRef, 
  useImperativeHandle: _react.useImperativeHandle,
  useDebugValue: _react.useDebugValue,

  // react-router-dom
  useLocation: useLocation,

  // react-redux
  useDispatch: reduxDispatch,
  useSelector: reduxSelector,
  useStore: reduxStore,
  shallowEqual: reduxShallowEqual,

  // hook lib
  useReactRouter: _useReactRouter,

  // custom hook
  useScrollHit: _useScrollHit,
}

// 개별 export 하지 않으면 에러 발생 (import 와 module.exports를 같이 사용할 수 없기 때문)
export const useState = hooks.useState
export const useEffect = hooks.useEffect
export const useLayoutEffect = hooks.useLayoutEffect
export const useContext = hooks.useContext
export const useReducer = hooks.useReducer
export const useCallback = hooks.useCallback
export const useMemo = hooks.useMemo
export const useRef = hooks.useRef
export const useImperativeHandle = hooks.useImperativeHandle
export const useDebugValue = hooks.useDebugValue

export const useDispatch = hooks.useDispatch
export const useSelector = hooks.useSelector
export const useStore = hooks.useStore
export const shallowEqual = hooks.shallowEqual

export const useReactRouter = hooks.useReactRouter
export const useScrollHit = hooks.useScrollHit


export default hooks
