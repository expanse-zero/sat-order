import { z } from 'zod';

const statusScheme = z.enum(['open', 'cancelled', 'committed', 'complete']);

export default statusScheme;
