import types from './types';

export const select = id => ({
  type: types.SELECT_LIB,
  payload: id,
});
