import reducer, { SELL_ITEM, sell } from './index';

describe('sales redux', () => {
  describe('actions', () => {
    describe('sell', () => {
      it('creates an action to sell items', () => {
        const item = { label: 'Item' };

        expect(sell(item)).toEqual({
          type: SELL_ITEM,
          payload: item,
        });
      });
    });
  });

  describe('reducer', () => {
    it('initial state is empty array', () => {
      expect(reducer()).toEqual([]);
    });

    describe('when action is SELL_ITEM', () => {
      it('returns the sales', () => {
        const intialState = [];
        const item = { label: 'Item' };
        const action = sell(item);
        expect(reducer(intialState, action)).toEqual([item]);
      });
    });
  });
});
