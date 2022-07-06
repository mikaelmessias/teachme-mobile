import {gql} from '@apollo/client';

export const UPDATE_BOOKING_STATUS = gql`
  mutation UpdateBookingStatus($bookingId: Float!, $status: String!) {
    booking_update_status(input: {id: $bookingId, status: $status})
  }
`;
