import { SiteDiary } from '@/app/data/types';

/** @gqlInput */
interface SiteDiaryInput {
  id: string;
  date: string;
  createdBy: string;
  title: string;
}

/** @gqlMutationField */
export function createSiteDiary(input: SiteDiaryInput): SiteDiary {
  return input;
}
