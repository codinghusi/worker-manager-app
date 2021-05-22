import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};














export type AddWorkProcessInput = {
  name?: Maybe<Scalars['String']>;
  workers?: Maybe<Array<Maybe<WorkerRef>>>;
};

export type AddWorkProcessPayload = {
  __typename?: 'AddWorkProcessPayload';
  workProcess?: Maybe<Array<Maybe<WorkProcess>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddWorkProcessPayloadWorkProcessArgs = {
  filter?: Maybe<WorkProcessFilter>;
  order?: Maybe<WorkProcessOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddWorkerInput = {
  name: Scalars['String'];
  tlSection: Scalars['String'];
  segment: Scalars['String'];
  workArea: Scalars['String'];
  process?: Maybe<WorkProcessRef>;
};

export type AddWorkerPayload = {
  __typename?: 'AddWorkerPayload';
  worker?: Maybe<Array<Maybe<Worker>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddWorkerPayloadWorkerArgs = {
  filter?: Maybe<WorkerFilter>;
  order?: Maybe<WorkerOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};


export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type DeleteWorkProcessPayload = {
  __typename?: 'DeleteWorkProcessPayload';
  workProcess?: Maybe<Array<Maybe<WorkProcess>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteWorkProcessPayloadWorkProcessArgs = {
  filter?: Maybe<WorkProcessFilter>;
  order?: Maybe<WorkProcessOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteWorkerPayload = {
  __typename?: 'DeleteWorkerPayload';
  worker?: Maybe<Array<Maybe<Worker>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteWorkerPayloadWorkerArgs = {
  filter?: Maybe<WorkerFilter>;
  order?: Maybe<WorkerOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}


export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addWorker?: Maybe<AddWorkerPayload>;
  updateWorker?: Maybe<UpdateWorkerPayload>;
  deleteWorker?: Maybe<DeleteWorkerPayload>;
  addWorkProcess?: Maybe<AddWorkProcessPayload>;
  updateWorkProcess?: Maybe<UpdateWorkProcessPayload>;
  deleteWorkProcess?: Maybe<DeleteWorkProcessPayload>;
};


export type MutationAddWorkerArgs = {
  input: Array<AddWorkerInput>;
};


export type MutationUpdateWorkerArgs = {
  input: UpdateWorkerInput;
};


export type MutationDeleteWorkerArgs = {
  filter: WorkerFilter;
};


export type MutationAddWorkProcessArgs = {
  input: Array<AddWorkProcessInput>;
};


export type MutationUpdateWorkProcessArgs = {
  input: UpdateWorkProcessInput;
};


export type MutationDeleteWorkProcessArgs = {
  filter: WorkProcessFilter;
};

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Query = {
  __typename?: 'Query';
  getWorker?: Maybe<Worker>;
  queryWorker?: Maybe<Array<Maybe<Worker>>>;
  aggregateWorker?: Maybe<WorkerAggregateResult>;
  getWorkProcess?: Maybe<WorkProcess>;
  queryWorkProcess?: Maybe<Array<Maybe<WorkProcess>>>;
  aggregateWorkProcess?: Maybe<WorkProcessAggregateResult>;
};


export type QueryGetWorkerArgs = {
  id: Scalars['ID'];
};


export type QueryQueryWorkerArgs = {
  filter?: Maybe<WorkerFilter>;
  order?: Maybe<WorkerOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateWorkerArgs = {
  filter?: Maybe<WorkerFilter>;
};


export type QueryGetWorkProcessArgs = {
  id: Scalars['ID'];
};


export type QueryQueryWorkProcessArgs = {
  filter?: Maybe<WorkProcessFilter>;
  order?: Maybe<WorkProcessOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateWorkProcessArgs = {
  filter?: Maybe<WorkProcessFilter>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type UpdateWorkProcessInput = {
  filter: WorkProcessFilter;
  set?: Maybe<WorkProcessPatch>;
  remove?: Maybe<WorkProcessPatch>;
};

export type UpdateWorkProcessPayload = {
  __typename?: 'UpdateWorkProcessPayload';
  workProcess?: Maybe<Array<Maybe<WorkProcess>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateWorkProcessPayloadWorkProcessArgs = {
  filter?: Maybe<WorkProcessFilter>;
  order?: Maybe<WorkProcessOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateWorkerInput = {
  filter: WorkerFilter;
  set?: Maybe<WorkerPatch>;
  remove?: Maybe<WorkerPatch>;
};

export type UpdateWorkerPayload = {
  __typename?: 'UpdateWorkerPayload';
  worker?: Maybe<Array<Maybe<Worker>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateWorkerPayloadWorkerArgs = {
  filter?: Maybe<WorkerFilter>;
  order?: Maybe<WorkerOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type WorkProcess = {
  __typename?: 'WorkProcess';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  workers?: Maybe<Array<Maybe<Worker>>>;
  workersAggregate?: Maybe<WorkerAggregateResult>;
};


export type WorkProcessWorkersArgs = {
  filter?: Maybe<WorkerFilter>;
  order?: Maybe<WorkerOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type WorkProcessWorkersAggregateArgs = {
  filter?: Maybe<WorkerFilter>;
};

export type WorkProcessAggregateResult = {
  __typename?: 'WorkProcessAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
};

export type WorkProcessFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<WorkProcessHasFilter>;
  and?: Maybe<Array<Maybe<WorkProcessFilter>>>;
  or?: Maybe<Array<Maybe<WorkProcessFilter>>>;
  not?: Maybe<WorkProcessFilter>;
};

export enum WorkProcessHasFilter {
  Name = 'name',
  Workers = 'workers'
}

export type WorkProcessOrder = {
  asc?: Maybe<WorkProcessOrderable>;
  desc?: Maybe<WorkProcessOrderable>;
  then?: Maybe<WorkProcessOrder>;
};

export enum WorkProcessOrderable {
  Name = 'name'
}

export type WorkProcessPatch = {
  name?: Maybe<Scalars['String']>;
  workers?: Maybe<Array<Maybe<WorkerRef>>>;
};

export type WorkProcessRef = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  workers?: Maybe<Array<Maybe<WorkerRef>>>;
};

export type Worker = {
  __typename?: 'Worker';
  id: Scalars['ID'];
  name: Scalars['String'];
  tlSection: Scalars['String'];
  segment: Scalars['String'];
  workArea: Scalars['String'];
  process?: Maybe<WorkProcess>;
};


export type WorkerProcessArgs = {
  filter?: Maybe<WorkProcessFilter>;
};

export type WorkerAggregateResult = {
  __typename?: 'WorkerAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  tlSectionMin?: Maybe<Scalars['String']>;
  tlSectionMax?: Maybe<Scalars['String']>;
  segmentMin?: Maybe<Scalars['String']>;
  segmentMax?: Maybe<Scalars['String']>;
  workAreaMin?: Maybe<Scalars['String']>;
  workAreaMax?: Maybe<Scalars['String']>;
};

export type WorkerFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<WorkerHasFilter>;
  and?: Maybe<Array<Maybe<WorkerFilter>>>;
  or?: Maybe<Array<Maybe<WorkerFilter>>>;
  not?: Maybe<WorkerFilter>;
};

export enum WorkerHasFilter {
  Name = 'name',
  TlSection = 'tlSection',
  Segment = 'segment',
  WorkArea = 'workArea',
  Process = 'process'
}

export type WorkerOrder = {
  asc?: Maybe<WorkerOrderable>;
  desc?: Maybe<WorkerOrderable>;
  then?: Maybe<WorkerOrder>;
};

export enum WorkerOrderable {
  Name = 'name',
  TlSection = 'tlSection',
  Segment = 'segment',
  WorkArea = 'workArea'
}

export type WorkerPatch = {
  name?: Maybe<Scalars['String']>;
  tlSection?: Maybe<Scalars['String']>;
  segment?: Maybe<Scalars['String']>;
  workArea?: Maybe<Scalars['String']>;
  process?: Maybe<WorkProcessRef>;
};

export type WorkerRef = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  tlSection?: Maybe<Scalars['String']>;
  segment?: Maybe<Scalars['String']>;
  workArea?: Maybe<Scalars['String']>;
  process?: Maybe<WorkProcessRef>;
};

export type GetWorkerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetWorkerQuery = (
  { __typename?: 'Query' }
  & { getWorker?: Maybe<(
    { __typename?: 'Worker' }
    & Pick<Worker, 'id' | 'name' | 'tlSection' | 'segment' | 'workArea'>
  )> }
);

export type UpdateWorkerMutationVariables = Exact<{
  id: Scalars['ID'];
  data: WorkerPatch;
}>;


export type UpdateWorkerMutation = (
  { __typename?: 'Mutation' }
  & { updateWorker?: Maybe<(
    { __typename?: 'UpdateWorkerPayload' }
    & { worker?: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id'>
    )>>> }
  )> }
);

export type AddWorkerMutationVariables = Exact<{
  data: AddWorkerInput;
}>;


export type AddWorkerMutation = (
  { __typename?: 'Mutation' }
  & { addWorker?: Maybe<(
    { __typename?: 'AddWorkerPayload' }
    & { worker?: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id'>
    )>>> }
  )> }
);


export const GetWorkerDocument = gql`
    query GetWorker($id: ID!) {
  getWorker(id: $id) {
    id
    name
    tlSection
    segment
    workArea
  }
}
    `;

/**
 * __useGetWorkerQuery__
 *
 * To run a query within a React component, call `useGetWorkerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkerQuery(baseOptions: Apollo.QueryHookOptions<GetWorkerQuery, GetWorkerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkerQuery, GetWorkerQueryVariables>(GetWorkerDocument, options);
      }
export function useGetWorkerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkerQuery, GetWorkerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkerQuery, GetWorkerQueryVariables>(GetWorkerDocument, options);
        }
export type GetWorkerQueryHookResult = ReturnType<typeof useGetWorkerQuery>;
export type GetWorkerLazyQueryHookResult = ReturnType<typeof useGetWorkerLazyQuery>;
export type GetWorkerQueryResult = Apollo.QueryResult<GetWorkerQuery, GetWorkerQueryVariables>;
export const UpdateWorkerDocument = gql`
    mutation UpdateWorker($id: ID!, $data: WorkerPatch!) {
  updateWorker(input: {filter: {id: [$id]}, set: $data}) {
    worker {
      id
    }
  }
}
    `;
export type UpdateWorkerMutationFn = Apollo.MutationFunction<UpdateWorkerMutation, UpdateWorkerMutationVariables>;

/**
 * __useUpdateWorkerMutation__
 *
 * To run a mutation, you first call `useUpdateWorkerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkerMutation, { data, loading, error }] = useUpdateWorkerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateWorkerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkerMutation, UpdateWorkerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkerMutation, UpdateWorkerMutationVariables>(UpdateWorkerDocument, options);
      }
export type UpdateWorkerMutationHookResult = ReturnType<typeof useUpdateWorkerMutation>;
export type UpdateWorkerMutationResult = Apollo.MutationResult<UpdateWorkerMutation>;
export type UpdateWorkerMutationOptions = Apollo.BaseMutationOptions<UpdateWorkerMutation, UpdateWorkerMutationVariables>;
export const AddWorkerDocument = gql`
    mutation AddWorker($data: AddWorkerInput!) {
  addWorker(input: [$data]) {
    worker {
      id
    }
  }
}
    `;
export type AddWorkerMutationFn = Apollo.MutationFunction<AddWorkerMutation, AddWorkerMutationVariables>;

/**
 * __useAddWorkerMutation__
 *
 * To run a mutation, you first call `useAddWorkerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWorkerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWorkerMutation, { data, loading, error }] = useAddWorkerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddWorkerMutation(baseOptions?: Apollo.MutationHookOptions<AddWorkerMutation, AddWorkerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddWorkerMutation, AddWorkerMutationVariables>(AddWorkerDocument, options);
      }
export type AddWorkerMutationHookResult = ReturnType<typeof useAddWorkerMutation>;
export type AddWorkerMutationResult = Apollo.MutationResult<AddWorkerMutation>;
export type AddWorkerMutationOptions = Apollo.BaseMutationOptions<AddWorkerMutation, AddWorkerMutationVariables>;