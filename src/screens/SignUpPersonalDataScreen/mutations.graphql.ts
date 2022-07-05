import {gql} from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $cpf: String!
    $password: String!
    $birthdate: Float
    $biography: String
    $userType: UserTypeEnum!
  ) {
    user_create(
      user: {
        name: $name
        email: $email
        cpf: $cpf
        password: $password
        birthdate: $birthdate
        biography: $biography
        userType: $userType
      }
    ) {
      id
      name
    }
  }
`;
