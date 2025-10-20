import { gql } from '@apollo/client';

export const SITE_DIARY_QUERY = gql`
  query SiteDiary($id: String!) {
    siteDiary(id: $id) {
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
