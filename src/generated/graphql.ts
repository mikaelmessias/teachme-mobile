import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  jedi: JediEntity;
  jediId: Scalars['Float'];
  padawan: PadawanEntity;
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
  Unconfirmed = 'UNCONFIRMED',
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

export type CreateJediInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Float']>;
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type CreateJediSkillInput = {
  jediId: Scalars['Float'];
  price: Scalars['Float'];
  techId: Scalars['Float'];
};

export type CreatePadawanInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Float']>;
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type CreateTechInput = {
  thumbnail: Scalars['String'];
  title: Scalars['String'];
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
  jedi: JediEntity;
  jediId: Scalars['Float'];
  updatedAt: Scalars['Float'];
};

export type JediEntity = {
  __typename?: 'JediEntity';
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
};

export type JediSkillEntity = {
  __typename?: 'JediSkillEntity';
  createdAt: Scalars['Float'];
  id: Scalars['String'];
  jedi: JediEntity;
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
  jedi_availability_update: JediEntity;
  jedi_create: JediEntity;
  jedi_delete_single: Scalars['Boolean'];
  jedi_skill_create: JediEntity;
  jedi_skill_delete_single: JediEntity;
  jedi_update: JediEntity;
  padawan_create: PadawanEntity;
  padawan_delete_single: Scalars['Boolean'];
  padawan_update: PadawanEntity;
  tech_create: TechEntity;
  tech_delete_all?: Maybe<Array<TechEntity>>;
  tech_delete_single: Scalars['Boolean'];
  tech_update: TechEntity;
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

export type MutationJedi_CreateArgs = {
  jedi: CreateJediInput;
};

export type MutationJedi_Delete_SingleArgs = {
  id: Scalars['Float'];
};

export type MutationJedi_Skill_CreateArgs = {
  jediSkill: CreateJediSkillInput;
};

export type MutationJedi_Skill_Delete_SingleArgs = {
  jediSkill: DeleteJediSkillInput;
};

export type MutationJedi_UpdateArgs = {
  jedi: UpdateJediInput;
};

export type MutationPadawan_CreateArgs = {
  padawan: CreatePadawanInput;
};

export type MutationPadawan_Delete_SingleArgs = {
  id: Scalars['Float'];
};

export type MutationPadawan_UpdateArgs = {
  padawan: UpdatePadawanInput;
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

export type PadawanEntity = {
  __typename?: 'PadawanEntity';
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
  updatedAt: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  booking_list_all: Array<BookingEntity>;
  booking_list_by_jedi_id: Array<BookingEntity>;
  booking_list_by_padawan_id: Array<BookingEntity>;
  booking_list_single: BookingEntity;
  jedi_list_all: Array<JediEntity>;
  jedi_list_single?: Maybe<JediEntity>;
  padawan_list_all: Array<PadawanEntity>;
  padawan_list_single?: Maybe<PadawanEntity>;
  tech_list_all: Array<TechEntity>;
  tech_list_by_title: Array<TechEntity>;
  tech_list_single?: Maybe<TechEntity>;
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

export type QueryJedi_List_SingleArgs = {
  id: Scalars['Float'];
};

export type QueryPadawan_List_SingleArgs = {
  id: Scalars['Float'];
};

export type QueryTech_List_By_TitleArgs = {
  title: Scalars['String'];
};

export type QueryTech_List_SingleArgs = {
  id: Scalars['Float'];
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

export type UpdateJediInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Float']>;
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdatePadawanInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Float']>;
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTechInput = {
  id: Scalars['Float'];
  thumbnail: Scalars['String'];
};

export enum WeekdaysEnum {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
}

export type TechListAllQueryVariables = Exact<{[key: string]: never}>;

export type TechListAllQuery = {
  __typename?: 'Query';
  tech_list_all: Array<{
    __typename?: 'TechEntity';
    id: number;
    title: string;
    thumbnail: string;
    updatedAt: number;
    createdAt: number;
  }>;
};

export const TechListAllDocument = gql`
  query TechListAll {
    tech_list_all {
      id
      title
      thumbnail
      updatedAt
      createdAt
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
export function useTechListAllQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TechListAllQuery,
    TechListAllQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<TechListAllQuery, TechListAllQueryVariables>(
    TechListAllDocument,
    options,
  );
}
export function useTechListAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TechListAllQuery,
    TechListAllQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<TechListAllQuery, TechListAllQueryVariables>(
    TechListAllDocument,
    options,
  );
}
export type TechListAllQueryHookResult = ReturnType<typeof useTechListAllQuery>;
export type TechListAllLazyQueryHookResult = ReturnType<
  typeof useTechListAllLazyQuery
>;
export type TechListAllQueryResult = Apollo.QueryResult<
  TechListAllQuery,
  TechListAllQueryVariables
>;
