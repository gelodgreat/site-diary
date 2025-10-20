import { gql } from '@apollo/client';

export const CREATE_SITE_DIARY_MUTATION = gql`
  mutation CreateSiteDiary($input: SiteDiaryInput!) {
    createSiteDiary(input: $input) {
      id
      title
      date
      createdBy
    }
  }
`;
