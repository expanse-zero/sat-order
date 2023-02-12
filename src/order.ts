import { z } from 'zod';

import orderScheme from './schemas/order.js';

type Order = z.infer<typeof orderScheme>;

const createOrder = (
  id: string,
  client: string,
  bounty = 0,
  bidders: string[] = [],
) => {
  const order = orderScheme.parse({
    id, client, bounty, bidders, status: 'open',
  }) satisfies Order;
  return order;
};

export {
  Order,
  createOrder,
};
