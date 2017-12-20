/* eslint-disable import/prefer-default-export */
import types from './types';

export const select = id => ({
  type: types.SELECT_LIB,
  payload: id,
});
