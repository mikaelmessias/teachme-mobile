import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BookingEntity = {
  __typename?: 'BookingEntity';
  createdAt: Scalars['Float'];
  date: Scalars['Float'];
  id: Scalars['Float'];
  jedi: UserEntity;
  jediId: Scalars['Float'];
  padawan: UserEntity;
  padawanId: Scalars['Float'];
  status: BookingStatusEnum;
  tech: TechEntity;
  techId: Scalars['Float'];
  updatedAt: Scalars['Float'];
};

export enum BookingStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Unconfirmed = 'UNCONFIRMED'
}

export type CreateBookingInput = {
  date: Scalars['Float'];
  jediId: Scalars['Float'];
  padawanId: Scalars['Float'];
  techId: Scalars['Float'];
};

export type CreateJediAvailabilityInput = {
  days: Array<WeekdaysEnum>;
  jediId: Scalars['Float'];
};

export type CreateJediSkillInput = {
  jediId: Scalars['Float'];
  price: Scalars['Float'];
  techId: Scalars['Float'];
};

export type CreateTechInput = {
  thumbnail: Scalars['String'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Float']>;
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  userType: UserTypeEnum;
};

export type DeleteJediSkillInput = {
  jediId: Scalars['Float'];
  techId: Scalars['Float'];
};

export type JediAvailabilityEntity = {
  __typename?: 'JediAvailabilityEntity';
  createdAt: Scalars['Float'];
  day: WeekdaysEnum;
  id: Scalars['String'];
  jedi: UserEntity;
  jediId: Scalars['Float'];
  updatedAt: Scalars['Float'];
};

export type JediSkillEntity = {
  __typename?: 'JediSkillEntity';
  createdAt: Scalars['Float'];
  id: Scalars['String'];
  jedi: UserEntity;
  jediId: Scalars['Float'];
  price: Scalars['Float'];
  tech: TechEntity;
  techId: Scalars['Float'];
  updatedAt: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  booking_create: BookingEntity;
  booking_delete_single: Scalars['Boolean'];
  booking_update_status: Scalars['Boolean'];
  jedi_availability_update: UserEntity;
  jedi_skill_create: UserEntity;
  jedi_skill_delete_single: UserEntity;
  tech_create: TechEntity;
  tech_delete_all?: Maybe<Array<TechEntity>>;
  tech_delete_single: Scalars['Boolean'];
  tech_update: TechEntity;
  user_create: UserEntity;
  user_delete_single: Scalars['Boolean'];
  user_update: UserEntity;
};


export type MutationBooking_CreateArgs = {
  booking: CreateBookingInput;
};


export type MutationBooking_Delete_SingleArgs = {
  id: Scalars['Float'];
};


export type MutationBooking_Update_StatusArgs = {
  input: UpdateBookingStatus;
};


export type MutationJedi_Availability_UpdateArgs = {
  jediAvailability: CreateJediAvailabilityInput;
};


export type MutationJedi_Skill_CreateArgs = {
  jediSkill: CreateJediSkillInput;
};


export type MutationJedi_Skill_Delete_SingleArgs = {
  jediSkill: DeleteJediSkillInput;
};


export type MutationTech_CreateArgs = {
  tech: CreateTechInput;
};


export type MutationTech_Delete_SingleArgs = {
  id: Scalars['Float'];
};


export type MutationTech_UpdateArgs = {
  tech: UpdateTechInput;
};


export type MutationUser_CreateArgs = {
  user: CreateUserInput;
};


export type MutationUser_Delete_SingleArgs = {
  id: Scalars['Float'];
};


export type MutationUser_UpdateArgs = {
  user: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  booking_list_all: Array<BookingEntity>;
  booking_list_by_jedi_id: Array<BookingEntity>;
  booking_list_by_padawan_id: Array<BookingEntity>;
  booking_list_single: BookingEntity;
  tech_list_all: Array<TechEntity>;
  tech_list_by_title: Array<TechEntity>;
  tech_list_single?: Maybe<TechEntity>;
  user_list_all: Array<UserEntity>;
  user_list_single?: Maybe<UserEntity>;
  user_login?: Maybe<UserEntity>;
};


export type QueryBooking_List_By_Jedi_IdArgs = {
  jediId: Scalars['Float'];
};


export type QueryBooking_List_By_Padawan_IdArgs = {
  padawanId: Scalars['Float'];
};


export type QueryBooking_List_SingleArgs = {
  id: Scalars['Float'];
};


export type QueryTech_List_By_TitleArgs = {
  title: Scalars['String'];
};


export type QueryTech_List_SingleArgs = {
  id: Scalars['Float'];
};


export type QueryUser_List_SingleArgs = {
  id: Scalars['Float'];
};


export type QueryUser_LoginArgs = {
  login: UserLoginInput;
};

export type TechEntity = {
  __typename?: 'TechEntity';
  createdAt: Scalars['Float'];
  id: Scalars['Float'];
  skills?: Maybe<Array<JediSkillEntity>>;
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['Float'];
};

export type UpdateBookingStatus = {
  id: Scalars['Float'];
  status: Scalars['String'];
};

export type UpdateTechInput = {
  id: Scalars['Float'];
  thumbnail: Scalars['String'];
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Float']>;
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  availability?: Maybe<Array<JediAvailabilityEntity>>;
  avatar?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Float']>;
  bookings?: Maybe<Array<BookingEntity>>;
  cpf: Scalars['String'];
  createdAt: Scalars['Float'];
  email: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  password: Scalars['String'];
  skills?: Maybe<Array<JediSkillEntity>>;
  updatedAt: Scalars['Float'];
  userType: UserTypeEnum;
};

export type UserLoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export enum UserTypeEnum {
  Jedi = 'JEDI',
  Padawan = 'PADAWAN'
}

export enum WeekdaysEnum {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type UserLoginQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginQuery = { __typename?: 'Query', user_login?: { __typename?: 'UserEntity', id: number, userType: UserTypeEnum } | null };

export type UpdateBookingStatusMutationVariables = Exact<{
  bookingId: Scalars['Float'];
  status: Scalars['String'];
}>;


export type UpdateBookingStatusMutation = { __typename?: 'Mutation', booking_update_status: boolean };

export type ListAllBookingsByPadawanIdQueryVariables = Exact<{
  padawanId: Scalars['Float'];
}>;


export type ListAllBookingsByPadawanIdQuery = { __typename?: 'Query', booking_list_by_padawan_id: Array<{ __typename?: 'BookingEntity', id: number, date: number, status: BookingStatusEnum, jedi: { __typename?: 'UserEntity', id: number, name: string } }> };

export type ListAllBookingsByJediIdQueryVariables = Exact<{
  jediId: Scalars['Float'];
}>;


export type ListAllBookingsByJediIdQuery = { __typename?: 'Query', booking_list_by_jedi_id: Array<{ __typename?: 'BookingEntity', id: number, date: number, status: BookingStatusEnum, padawan: { __typename?: 'UserEntity', id: number, name: string } }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetUserQuery = { __typename?: 'Query', user_list_single?: { __typename?: 'UserEntity', id: number, name: string, email: string, cpf: string, birthdate?: number | null, biography?: string | null, avatar?: string | null, userType: UserTypeEnum, availability?: Array<{ __typename?: 'JediAvailabilityEntity', id: string, day: WeekdaysEnum }> | null, skills?: Array<{ __typename?: 'JediSkillEntity', id: string, techId: number, price: number, tech: { __typename?: 'TechEntity', id: number, title: string, thumbnail: string } }> | null } | null };

export type SearchTechByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type SearchTechByTitleQuery = { __typename?: 'Query', tech_list_by_title: Array<{ __typename?: 'TechEntity', id: number, title: string, skills?: Array<{ __typename?: 'JediSkillEntity', jedi: { __typename?: 'UserEntity', name: string, availability?: Array<{ __typename?: 'JediAvailabilityEntity', day: WeekdaysEnum }> | null, skills?: Array<{ __typename?: 'JediSkillEntity', tech: { __typename?: 'TechEntity', thumbnail: string } }> | null } }> | null }> };

export type CreateJediAvailabilityMutationVariables = Exact<{
  jediId: Scalars['Float'];
  days: Array<WeekdaysEnum> | WeekdaysEnum;
}>;


export type CreateJediAvailabilityMutation = { __typename?: 'Mutation', jedi_availability_update: { __typename?: 'UserEntity', id: number, availability?: Array<{ __typename?: 'JediAvailabilityEntity', id: string, day: WeekdaysEnum }> | null } };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  cpf: Scalars['String'];
  password: Scalars['String'];
  birthdate?: InputMaybe<Scalars['Float']>;
  biography?: InputMaybe<Scalars['String']>;
  userType: UserTypeEnum;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', user_create: { __typename?: 'UserEntity', id: number, name: string } };

export type CreateJediSkillMutationVariables = Exact<{
  jediId: Scalars['Float'];
  techId: Scalars['Float'];
  price: Scalars['Float'];
}>;


export type CreateJediSkillMutation = { __typename?: 'Mutation', jedi_skill_create: { __typename?: 'UserEntity', id: number, skills?: Array<{ __typename?: 'JediSkillEntity', id: string, price: number, tech: { __typename?: 'TechEntity', id: number, title: string, thumbnail: string } }> | null } };

export type DeleteJediSkillMutationVariables = Exact<{
  jediId: Scalars['Float'];
  techId: Scalars['Float'];
}>;


export type DeleteJediSkillMutation = { __typename?: 'Mutation', jedi_skill_delete_single: { __typename?: 'UserEntity', id: number, skills?: Array<{ __typename?: 'JediSkillEntity', id: string, price: number, tech: { __typename?: 'TechEntity', id: number, title: string, thumbnail: string } }> | null } };

export type TechListAllQueryVariables = Exact<{ [key: string]: never; }>;


export type TechListAllQuery = { __typename?: 'Query', tech_list_all: Array<{ __typename?: 'TechEntity', id: number, title: string, thumbnail: string }> };


export const UserLoginDocument = gql`
    query UserLogin($email: String!, $password: String!) {
  user_login(login: {email: $email, password: $password}) {
    id
    userType
  }
}
    `;

/**
 * __useUserLoginQuery__
 *
 * To run a query within a React component, call `useUserLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLoginQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserLoginQuery(baseOptions: Apollo.QueryHookOptions<UserLoginQuery, UserLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserLoginQuery, UserLoginQueryVariables>(UserLoginDocument, options);
      }
export function useUserLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserLoginQuery, UserLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserLoginQuery, UserLoginQueryVariables>(UserLoginDocument, options);
        }
export type UserLoginQueryHookResult = ReturnType<typeof useUserLoginQuery>;
export type UserLoginLazyQueryHookResult = ReturnType<typeof useUserLoginLazyQuery>;
export type UserLoginQueryResult = Apollo.QueryResult<UserLoginQuery, UserLoginQueryVariables>;
export const UpdateBookingStatusDocument = gql`
    mutation UpdateBookingStatus($bookingId: Float!, $status: String!) {
  booking_update_status(input: {id: $bookingId, status: $status})
}
    `;
export type UpdateBookingStatusMutationFn = Apollo.MutationFunction<UpdateBookingStatusMutation, UpdateBookingStatusMutationVariables>;

/**
 * __useUpdateBookingStatusMutation__
 *
 * To run a mutation, you first call `useUpdateBookingStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookingStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookingStatusMutation, { data, loading, error }] = useUpdateBookingStatusMutation({
 *   variables: {
 *      bookingId: // value for 'bookingId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateBookingStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookingStatusMutation, UpdateBookingStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookingStatusMutation, UpdateBookingStatusMutationVariables>(UpdateBookingStatusDocument, options);
      }
export type UpdateBookingStatusMutationHookResult = ReturnType<typeof useUpdateBookingStatusMutation>;
export type UpdateBookingStatusMutationResult = Apollo.MutationResult<UpdateBookingStatusMutation>;
export type UpdateBookingStatusMutationOptions = Apollo.BaseMutationOptions<UpdateBookingStatusMutation, UpdateBookingStatusMutationVariables>;
export const ListAllBookingsByPadawanIdDocument = gql`
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

/**
 * __useListAllBookingsByPadawanIdQuery__
 *
 * To run a query within a React component, call `useListAllBookingsByPadawanIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllBookingsByPadawanIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllBookingsByPadawanIdQuery({
 *   variables: {
 *      padawanId: // value for 'padawanId'
 *   },
 * });
 */
export function useListAllBookingsByPadawanIdQuery(baseOptions: Apollo.QueryHookOptions<ListAllBookingsByPadawanIdQuery, ListAllBookingsByPadawanIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAllBookingsByPadawanIdQuery, ListAllBookingsByPadawanIdQueryVariables>(ListAllBookingsByPadawanIdDocument, options);
      }
export function useListAllBookingsByPadawanIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAllBookingsByPadawanIdQuery, ListAllBookingsByPadawanIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAllBookingsByPadawanIdQuery, ListAllBookingsByPadawanIdQueryVariables>(ListAllBookingsByPadawanIdDocument, options);
        }
export type ListAllBookingsByPadawanIdQueryHookResult = ReturnType<typeof useListAllBookingsByPadawanIdQuery>;
export type ListAllBookingsByPadawanIdLazyQueryHookResult = ReturnType<typeof useListAllBookingsByPadawanIdLazyQuery>;
export type ListAllBookingsByPadawanIdQueryResult = Apollo.QueryResult<ListAllBookingsByPadawanIdQuery, ListAllBookingsByPadawanIdQueryVariables>;
export const ListAllBookingsByJediIdDocument = gql`
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

/**
 * __useListAllBookingsByJediIdQuery__
 *
 * To run a query within a React component, call `useListAllBookingsByJediIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllBookingsByJediIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllBookingsByJediIdQuery({
 *   variables: {
 *      jediId: // value for 'jediId'
 *   },
 * });
 */
export function useListAllBookingsByJediIdQuery(baseOptions: Apollo.QueryHookOptions<ListAllBookingsByJediIdQuery, ListAllBookingsByJediIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAllBookingsByJediIdQuery, ListAllBookingsByJediIdQueryVariables>(ListAllBookingsByJediIdDocument, options);
      }
export function useListAllBookingsByJediIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAllBookingsByJediIdQuery, ListAllBookingsByJediIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAllBookingsByJediIdQuery, ListAllBookingsByJediIdQueryVariables>(ListAllBookingsByJediIdDocument, options);
        }
export type ListAllBookingsByJediIdQueryHookResult = ReturnType<typeof useListAllBookingsByJediIdQuery>;
export type ListAllBookingsByJediIdLazyQueryHookResult = ReturnType<typeof useListAllBookingsByJediIdLazyQuery>;
export type ListAllBookingsByJediIdQueryResult = Apollo.QueryResult<ListAllBookingsByJediIdQuery, ListAllBookingsByJediIdQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: Float!) {
  user_list_single(id: $id) {
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

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const SearchTechByTitleDocument = gql`
    query SearchTechByTitle($title: String!) {
  tech_list_by_title(title: $title) {
    id
    title
    skills {
      jedi {
        name
        availability {
          day
        }
        skills {
          tech {
            thumbnail
          }
        }
      }
    }
  }
}
    `;

/**
 * __useSearchTechByTitleQuery__
 *
 * To run a query within a React component, call `useSearchTechByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTechByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTechByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSearchTechByTitleQuery(baseOptions: Apollo.QueryHookOptions<SearchTechByTitleQuery, SearchTechByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchTechByTitleQuery, SearchTechByTitleQueryVariables>(SearchTechByTitleDocument, options);
      }
export function useSearchTechByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTechByTitleQuery, SearchTechByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchTechByTitleQuery, SearchTechByTitleQueryVariables>(SearchTechByTitleDocument, options);
        }
export type SearchTechByTitleQueryHookResult = ReturnType<typeof useSearchTechByTitleQuery>;
export type SearchTechByTitleLazyQueryHookResult = ReturnType<typeof useSearchTechByTitleLazyQuery>;
export type SearchTechByTitleQueryResult = Apollo.QueryResult<SearchTechByTitleQuery, SearchTechByTitleQueryVariables>;
export const CreateJediAvailabilityDocument = gql`
    mutation CreateJediAvailability($jediId: Float!, $days: [WeekdaysEnum!]!) {
  jedi_availability_update(jediAvailability: {jediId: $jediId, days: $days}) {
    id
    availability {
      id
      day
    }
  }
}
    `;
export type CreateJediAvailabilityMutationFn = Apollo.MutationFunction<CreateJediAvailabilityMutation, CreateJediAvailabilityMutationVariables>;

/**
 * __useCreateJediAvailabilityMutation__
 *
 * To run a mutation, you first call `useCreateJediAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJediAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJediAvailabilityMutation, { data, loading, error }] = useCreateJediAvailabilityMutation({
 *   variables: {
 *      jediId: // value for 'jediId'
 *      days: // value for 'days'
 *   },
 * });
 */
export function useCreateJediAvailabilityMutation(baseOptions?: Apollo.MutationHookOptions<CreateJediAvailabilityMutation, CreateJediAvailabilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJediAvailabilityMutation, CreateJediAvailabilityMutationVariables>(CreateJediAvailabilityDocument, options);
      }
export type CreateJediAvailabilityMutationHookResult = ReturnType<typeof useCreateJediAvailabilityMutation>;
export type CreateJediAvailabilityMutationResult = Apollo.MutationResult<CreateJediAvailabilityMutation>;
export type CreateJediAvailabilityMutationOptions = Apollo.BaseMutationOptions<CreateJediAvailabilityMutation, CreateJediAvailabilityMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!, $email: String!, $cpf: String!, $password: String!, $birthdate: Float, $biography: String, $userType: UserTypeEnum!) {
  user_create(
    user: {name: $name, email: $email, cpf: $cpf, password: $password, birthdate: $birthdate, biography: $biography, userType: $userType}
  ) {
    id
    name
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      cpf: // value for 'cpf'
 *      password: // value for 'password'
 *      birthdate: // value for 'birthdate'
 *      biography: // value for 'biography'
 *      userType: // value for 'userType'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateJediSkillDocument = gql`
    mutation CreateJediSkill($jediId: Float!, $techId: Float!, $price: Float!) {
  jedi_skill_create(jediSkill: {jediId: $jediId, techId: $techId, price: $price}) {
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
export type CreateJediSkillMutationFn = Apollo.MutationFunction<CreateJediSkillMutation, CreateJediSkillMutationVariables>;

/**
 * __useCreateJediSkillMutation__
 *
 * To run a mutation, you first call `useCreateJediSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJediSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJediSkillMutation, { data, loading, error }] = useCreateJediSkillMutation({
 *   variables: {
 *      jediId: // value for 'jediId'
 *      techId: // value for 'techId'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateJediSkillMutation(baseOptions?: Apollo.MutationHookOptions<CreateJediSkillMutation, CreateJediSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJediSkillMutation, CreateJediSkillMutationVariables>(CreateJediSkillDocument, options);
      }
export type CreateJediSkillMutationHookResult = ReturnType<typeof useCreateJediSkillMutation>;
export type CreateJediSkillMutationResult = Apollo.MutationResult<CreateJediSkillMutation>;
export type CreateJediSkillMutationOptions = Apollo.BaseMutationOptions<CreateJediSkillMutation, CreateJediSkillMutationVariables>;
export const DeleteJediSkillDocument = gql`
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
export type DeleteJediSkillMutationFn = Apollo.MutationFunction<DeleteJediSkillMutation, DeleteJediSkillMutationVariables>;

/**
 * __useDeleteJediSkillMutation__
 *
 * To run a mutation, you first call `useDeleteJediSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJediSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJediSkillMutation, { data, loading, error }] = useDeleteJediSkillMutation({
 *   variables: {
 *      jediId: // value for 'jediId'
 *      techId: // value for 'techId'
 *   },
 * });
 */
export function useDeleteJediSkillMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJediSkillMutation, DeleteJediSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJediSkillMutation, DeleteJediSkillMutationVariables>(DeleteJediSkillDocument, options);
      }
export type DeleteJediSkillMutationHookResult = ReturnType<typeof useDeleteJediSkillMutation>;
export type DeleteJediSkillMutationResult = Apollo.MutationResult<DeleteJediSkillMutation>;
export type DeleteJediSkillMutationOptions = Apollo.BaseMutationOptions<DeleteJediSkillMutation, DeleteJediSkillMutationVariables>;
export const TechListAllDocument = gql`
    query TechListAll {
  tech_list_all {
    id
    title
    thumbnail
  }
}
    `;

/**
 * __useTechListAllQuery__
 *
 * To run a query within a React component, call `useTechListAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechListAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechListAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useTechListAllQuery(baseOptions?: Apollo.QueryHookOptions<TechListAllQuery, TechListAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TechListAllQuery, TechListAllQueryVariables>(TechListAllDocument, options);
      }
export function useTechListAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechListAllQuery, TechListAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TechListAllQuery, TechListAllQueryVariables>(TechListAllDocument, options);
        }
export type TechListAllQueryHookResult = ReturnType<typeof useTechListAllQuery>;
export type TechListAllLazyQueryHookResult = ReturnType<typeof useTechListAllLazyQuery>;
export type TechListAllQueryResult = Apollo.QueryResult<TechListAllQuery, TechListAllQueryVariables>;