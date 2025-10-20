import data from '@/app/data/site-diary.json';
import { SiteDiary } from '@/app/data/types';

/** @gqlQueryField */
export function siteDiaries(): Array<SiteDiary> {
  return data as Array<SiteDiary>;
}

/** @gqlQueryField */
export function siteDiary(id: string): SiteDiary | null {
  const entry = data.find((entry) => entry.id === id) as SiteDiary;

  return entry;
}
