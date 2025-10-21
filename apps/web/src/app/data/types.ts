import type { Int } from 'grats';

/** @gqlType */
export type Weather = {
  /** @gqlField */
  temperature: Int;
  /** @gqlField */
  description: string;
};

/** @gqlType */
export type Resources = {
  /** @gqlField */
  labor?: string;
  /** @gqlField */
  materials?: string;
  /** @gqlField */
  machinery?: string;
};

/** @gqlType */
export type Incident = {
  /** @gqlField */
  type: string;
  /** @gqlField */
  description: string;
  /** @gqlField */
  time?: string;
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
  workProgress?: string;
  /** @gqlField */
  resources?: Resources;
  /** @gqlField */
  incidents?: Incident[];
  /** @gqlField */
  attendees?: string[];
  /** @gqlField */
  attachments?: string[];
};
