import { z } from 'zod';

export const termFormSchema = z.object({
  value: z.string().min(1, 'Value is required').max(50, 'Value must be at most 50 characters'),
  meanings: z
    .array(
      z.object({
        text: z.string().min(1, 'Meaning value is required').max(100, 'Meaning value must be at most 100 characters'),
      })
    )
    .min(1, 'There must be at least one meaning'),
  examples: z
    .array(
      z.object({
        text: z.string().min(1, 'Meaning value is required').max(100, 'Meaning value must be at most 100 characters'),
      })
    )
    .optional(),
  folderId: z.number().optional(),
});
