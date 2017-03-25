import reducer from './index';

describe('sales redux', () => {
  describe('reducer', () => {
    it('initial state is empty array', () => {
      expect(reducer()).toEqual([]);
    });
  });
});
