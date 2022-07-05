import {gql} from '@apollo/client';

export const CREATE_JEDI_SKILL = gql`
  mutation CreateJediSkill($jediId: Float!, $techId: Float!, $price: Float!) {
    jedi_skill_create(
      jediSkill: {jediId: $jediId, techId: $techId, price: $price}
    ) {
      id
      skills {
        id
        tech {
          id
          title
          thumbnail
        }
        price
      }
    }
  }
`;

export const DELETE_JEDI_SKILL = gql`
  mutation DeleteJediSkill($jediId: Float!, $techId: Float!) {
    jedi_skill_delete_single(jediSkill: {jediId: $jediId, techId: $techId}) {
      id
      skills {
        id
        tech {
          id
          title
          thumbnail
        }
        price
      }
    }
  }
`;
