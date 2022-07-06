import {gql} from '@apollo/client';

export const LIST_ALL_BOOKINGS_BY_PADAWAN_ID = gql`
  query ListAllBookingsByPadawanId($padawanId: Float!) {
    booking_list_by_padawan_id(padawanId: $padawanId) {
      id
      date
      status
      jedi {
        id
        name
      }
    }
  }
`;

export const LIST_ALL_BOOKINGS_BY_JEDI_ID = gql`
  query ListAllBookingsByJediId($jediId: Float!) {
    booking_list_by_jedi_id(jediId: $jediId) {
      id
      date
      status
      padawan {
        id
        name
      }
    }
  }
`;
