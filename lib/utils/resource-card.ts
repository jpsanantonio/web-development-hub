// Helpers for rendering a resource card. The id doubles as the anchor target
// and the aria-labelledby reference, so both derive from one rule.
import { toSlug } from '@/lib/utils/navigation';

export function generateResourceId(title: string): string {
  return toSlug(title);
}
