import {BookingStatusEnum} from '../generated/graphql';

export const getBookingStatus = (status: BookingStatusEnum) => {
  switch (status) {
    case BookingStatusEnum.Unconfirmed:
      return 'Não confirmado';
    case BookingStatusEnum.Confirmed:
      return 'Confirmado';
    case BookingStatusEnum.Cancelled:
      return 'Cancelado';
    case BookingStatusEnum.Completed:
      return 'Finalizado';
  }
};
