import {WeekdaysEnum} from '../../../generated/graphql';

export interface iSkillResult {
  jedi: {
    name: string;
    availability: {
      day: WeekdaysEnum;
    }[];
    skills: {
      tech: {
        thumbnail: string;
      };
    };
  };
}
