export const SELL_ITEM = 'SELL_ITEM';

export function sell(item) {
  return {
    type: SELL_ITEM,
    payload: item,
  };
}

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SELL_ITEM:
      return [...state, ...[action.payload]];
    default:
      return state;
  }
}
