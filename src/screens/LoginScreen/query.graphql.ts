import {gql} from '@apollo/client';

export const USER_LOGIN = gql`
  query UserLogin($email: String!, $password: String!) {
    user_login(login: {email: $email, password: $password}) {
      id
      userType
    }
  }
`;
