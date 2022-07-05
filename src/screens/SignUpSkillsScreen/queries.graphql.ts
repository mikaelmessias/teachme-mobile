import {gql} from '@apollo/client';

export const TECH_LIST_ALL = gql`
  query TechListAll {
    tech_list_all {
      id
      title
      thumbnail
    }
  }
`;
