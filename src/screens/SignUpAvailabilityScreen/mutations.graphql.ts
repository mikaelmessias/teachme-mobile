import {gql} from '@apollo/client';

export const CREATE_JEDI_AVAILABILITY = gql`
  mutation CreateJediAvailability($jediId: Float!, $days: [WeekdaysEnum!]!) {
    jedi_availability_update(jediAvailability: {jediId: $jediId, days: $days}) {
      id
      availability {
        id
        day
      }
    }
  }
`;
