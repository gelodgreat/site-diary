import type { Int } from 'grats';

/** @gqlType */
export type Weather = {
  /** @gqlField */
  temperature: Int;
  /** @gqlField */
  description: string;
};

/** @gqlType */
export type SiteDiary = {
  /** @gqlField */
  id: string;
  /** @gqlField */
  date: string;
  /** @gqlField */
  weather?: Weather;
  /** @gqlField */
  createdBy: string;
  /** @gqlField */
  title: string;
  /** @gqlField */
  content?: string;
  /** @gqlField */
  attendees?: string[];
  /** @gqlField */
  attachments?: string[];
};
