import { describe, test, expect } from 'vitest';
import { createOrder } from '../src/order';

describe('types', () => {
  describe('Order', () => {
    test('create order with createOrder', () => {
      const order = createOrder('0', 'me', 10, ['bid0', 'bid1']);
      expect(order.id).toEqual('0');
      expect(order.bounty).toEqual(10);
      expect(order.bidders).toContain('bid0');
      expect(order.bidders).toContain('bid1');
      expect(order.bidders).toHaveLength(2);
    });

    test('create order without bidders', () => {
      const order = createOrder('0', 'me', 10);
      expect(order.id).toEqual('0');
      expect(order.bounty).toEqual(10);
      expect(order.bidders).toHaveLength(0);
    });

    test('create order without bounty or bidders', () => {
      const order = createOrder('0', 'me');
      expect(order.id).toEqual('0');
      expect(order.bounty).toEqual(0);
      expect(order.bidders).toHaveLength(0);
    });

    test('create order should add status open', () => {
      const order = createOrder('0', 'me');
      expect(order.status).toEqual('open');
    });

    test('throw error if id has white-space', () => {
      const throwOncreateOrder = () => {
        createOrder('white space', 'me');
      };
      expect(throwOncreateOrder).toThrow();
    });
  });
});
