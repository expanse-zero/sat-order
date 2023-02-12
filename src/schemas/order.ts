import { z } from 'zod';

import statusScheme from './order-status.js';

const orderScheme = z.object({
  id: z.string().regex(/^\S*$/),
  client: z.string(),
  bounty: z.number(),
  bidders: z.array(z.string()),
  status: statusScheme,
});

export default orderScheme;
