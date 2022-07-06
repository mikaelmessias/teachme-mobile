import {gql} from '@apollo/client';

export const SEARCH_TECH_BY_TITLE = gql`
  query SearchTechByTitle($title: String!) {
    tech_list_by_title(title: $title) {
      id
      title
      skills {
        jedi {
          name
          availability {
            day
          }
          skills {
            tech {
              thumbnail
            }
          }
        }
      }
    }
  }
`;
