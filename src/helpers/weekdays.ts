import {WeekdaysEnum} from '../generated/graphql';

export const weekdays = [
  {id: WeekdaysEnum.Monday, title: 'Segunda', subtitle: 'S'},
  {id: WeekdaysEnum.Tuesday, title: 'Terça', subtitle: 'T'},
  {id: WeekdaysEnum.Wednesday, title: 'Quarta', subtitle: 'Q'},
  {id: WeekdaysEnum.Thursday, title: 'Quinta', subtitle: 'Q'},
  {id: WeekdaysEnum.Friday, title: 'Sexta', subtitle: 'S'},
  {id: WeekdaysEnum.Saturday, title: 'Sábado', subtitle: 'S'},
  {id: WeekdaysEnum.Sunday, title: 'Domingo', subtitle: 'D'},
];

export const translateWeekdays = (status: WeekdaysEnum) => {
  switch (status) {
    case WeekdaysEnum.Monday:
      return 'Segunda';
    case WeekdaysEnum.Tuesday:
      return 'Terça';
    case WeekdaysEnum.Wednesday:
      return 'Quarta';
    case WeekdaysEnum.Thursday:
      return 'Quinta';
    case WeekdaysEnum.Friday:
      return 'Sexta';
    case WeekdaysEnum.Saturday:
      return 'Sábado';
    case WeekdaysEnum.Sunday:
      return 'Domingo';
  }
};
