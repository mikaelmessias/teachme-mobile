import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser(
    $id: Float!
  ) {
    user_list_single(
      id: $id
    ) {
      id
      name
      email
      cpf
      birthdate
      biography
      avatar
      userType
      
      availability {
        id
        day
      }
      
      skills {
        id
        techId
        price
        
        tech {
          id
          title
          thumbnail
        }
      }
    }
  }
`;