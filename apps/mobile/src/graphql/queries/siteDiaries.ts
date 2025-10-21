import { gql } from '@apollo/client';

export const SITE_DIARIES_QUERY = gql`
  query SiteDiaries {
    siteDiaries {
      id
      title
      date
      createdBy
      content
      attendees
      attachments
      weather {
        temperature
        description
      }
    }
  }
`;
