import {gql} from '@apollo/client';

export const CREATE_PADAWAN = gql`
  mutation CreatePadawan(
    $name: String!
    $email: String!
    $cpf: String!
    $password: String!
    $birthdate: Float
    $biography: String
  ) {
    padawan_create(
      padawan: {
        name: $name
        email: $email
        cpf: $cpf
        password: $password
        birthdate: $birthdate
        biography: $biography
      }
    ) {
      id
      name
    }
  }
`;

export const CREATE_JEDI = gql`
  mutation CreateJedi(
    $name: String!
    $email: String!
    $cpf: String!
    $password: String!
    $birthdate: Float
    $biography: String
  ) {
    jedi_create(
      jedi: {
        name: $name
        email: $email
        cpf: $cpf
        password: $password
        birthdate: $birthdate
        biography: $biography
      }
    ) {
      id
      name
    }
  }
`;
