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















export type AddWorkerInput = {
  name: Scalars['String'];
  tlSection: Worker_TlSectionRef;
  segment: Worker_SegmentRef;
  workArea: Worker_WorkAreaRef;
  worksteps?: Maybe<Array<Maybe<WorkstepRef>>>;
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

export type AddWorker_SegmentInput = {
  value: Scalars['String'];
};

export type AddWorker_SegmentPayload = {
  __typename?: 'AddWorker_segmentPayload';
  worker_segment?: Maybe<Array<Maybe<Worker_Segment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddWorker_SegmentPayloadWorker_SegmentArgs = {
  filter?: Maybe<Worker_SegmentFilter>;
  order?: Maybe<Worker_SegmentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddWorker_TlSectionInput = {
  value: Scalars['String'];
};

export type AddWorker_TlSectionPayload = {
  __typename?: 'AddWorker_tlSectionPayload';
  worker_tlSection?: Maybe<Array<Maybe<Worker_TlSection>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddWorker_TlSectionPayloadWorker_TlSectionArgs = {
  filter?: Maybe<Worker_TlSectionFilter>;
  order?: Maybe<Worker_TlSectionOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddWorker_WorkAreaInput = {
  value: Scalars['String'];
};

export type AddWorker_WorkAreaPayload = {
  __typename?: 'AddWorker_workAreaPayload';
  worker_workArea?: Maybe<Array<Maybe<Worker_WorkArea>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddWorker_WorkAreaPayloadWorker_WorkAreaArgs = {
  filter?: Maybe<Worker_WorkAreaFilter>;
  order?: Maybe<Worker_WorkAreaOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddWorkstepInput = {
  name: Scalars['String'];
  machineDuration: Scalars['String'];
  workDuration: Scalars['String'];
  walkDuration: Scalars['String'];
};

export type AddWorkstepPayload = {
  __typename?: 'AddWorkstepPayload';
  workstep?: Maybe<Array<Maybe<Workstep>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddWorkstepPayloadWorkstepArgs = {
  filter?: Maybe<WorkstepFilter>;
  order?: Maybe<WorkstepOrder>;
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
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
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

export type DeleteWorker_SegmentPayload = {
  __typename?: 'DeleteWorker_segmentPayload';
  worker_segment?: Maybe<Array<Maybe<Worker_Segment>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteWorker_SegmentPayloadWorker_SegmentArgs = {
  filter?: Maybe<Worker_SegmentFilter>;
  order?: Maybe<Worker_SegmentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteWorker_TlSectionPayload = {
  __typename?: 'DeleteWorker_tlSectionPayload';
  worker_tlSection?: Maybe<Array<Maybe<Worker_TlSection>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteWorker_TlSectionPayloadWorker_TlSectionArgs = {
  filter?: Maybe<Worker_TlSectionFilter>;
  order?: Maybe<Worker_TlSectionOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteWorker_WorkAreaPayload = {
  __typename?: 'DeleteWorker_workAreaPayload';
  worker_workArea?: Maybe<Array<Maybe<Worker_WorkArea>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteWorker_WorkAreaPayloadWorker_WorkAreaArgs = {
  filter?: Maybe<Worker_WorkAreaFilter>;
  order?: Maybe<Worker_WorkAreaOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteWorkstepPayload = {
  __typename?: 'DeleteWorkstepPayload';
  workstep?: Maybe<Array<Maybe<Workstep>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteWorkstepPayloadWorkstepArgs = {
  filter?: Maybe<WorkstepFilter>;
  order?: Maybe<WorkstepOrder>;
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
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
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
  in?: Maybe<Array<Maybe<Scalars['Int64']>>>;
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
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
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
  addWorker_tlSection?: Maybe<AddWorker_TlSectionPayload>;
  deleteWorker_tlSection?: Maybe<DeleteWorker_TlSectionPayload>;
  addWorker_segment?: Maybe<AddWorker_SegmentPayload>;
  deleteWorker_segment?: Maybe<DeleteWorker_SegmentPayload>;
  addWorker_workArea?: Maybe<AddWorker_WorkAreaPayload>;
  deleteWorker_workArea?: Maybe<DeleteWorker_WorkAreaPayload>;
  addWorkstep?: Maybe<AddWorkstepPayload>;
  updateWorkstep?: Maybe<UpdateWorkstepPayload>;
  deleteWorkstep?: Maybe<DeleteWorkstepPayload>;
};


export type MutationAddWorkerArgs = {
  input: Array<AddWorkerInput>;
  upsert?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateWorkerArgs = {
  input: UpdateWorkerInput;
};


export type MutationDeleteWorkerArgs = {
  filter: WorkerFilter;
};


export type MutationAddWorker_TlSectionArgs = {
  input: Array<AddWorker_TlSectionInput>;
  upsert?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteWorker_TlSectionArgs = {
  filter: Worker_TlSectionFilter;
};


export type MutationAddWorker_SegmentArgs = {
  input: Array<AddWorker_SegmentInput>;
  upsert?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteWorker_SegmentArgs = {
  filter: Worker_SegmentFilter;
};


export type MutationAddWorker_WorkAreaArgs = {
  input: Array<AddWorker_WorkAreaInput>;
  upsert?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteWorker_WorkAreaArgs = {
  filter: Worker_WorkAreaFilter;
};


export type MutationAddWorkstepArgs = {
  input: Array<AddWorkstepInput>;
};


export type MutationUpdateWorkstepArgs = {
  input: UpdateWorkstepInput;
};


export type MutationDeleteWorkstepArgs = {
  filter: WorkstepFilter;
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
  getWorker_tlSection?: Maybe<Worker_TlSection>;
  queryWorker_tlSection?: Maybe<Array<Maybe<Worker_TlSection>>>;
  aggregateWorker_tlSection?: Maybe<Worker_TlSectionAggregateResult>;
  getWorker_segment?: Maybe<Worker_Segment>;
  queryWorker_segment?: Maybe<Array<Maybe<Worker_Segment>>>;
  aggregateWorker_segment?: Maybe<Worker_SegmentAggregateResult>;
  getWorker_workArea?: Maybe<Worker_WorkArea>;
  queryWorker_workArea?: Maybe<Array<Maybe<Worker_WorkArea>>>;
  aggregateWorker_workArea?: Maybe<Worker_WorkAreaAggregateResult>;
  getWorkstep?: Maybe<Workstep>;
  queryWorkstep?: Maybe<Array<Maybe<Workstep>>>;
  aggregateWorkstep?: Maybe<WorkstepAggregateResult>;
};


export type QueryGetWorkerArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
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


export type QueryGetWorker_TlSectionArgs = {
  value: Scalars['String'];
};


export type QueryQueryWorker_TlSectionArgs = {
  filter?: Maybe<Worker_TlSectionFilter>;
  order?: Maybe<Worker_TlSectionOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateWorker_TlSectionArgs = {
  filter?: Maybe<Worker_TlSectionFilter>;
};


export type QueryGetWorker_SegmentArgs = {
  value: Scalars['String'];
};


export type QueryQueryWorker_SegmentArgs = {
  filter?: Maybe<Worker_SegmentFilter>;
  order?: Maybe<Worker_SegmentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateWorker_SegmentArgs = {
  filter?: Maybe<Worker_SegmentFilter>;
};


export type QueryGetWorker_WorkAreaArgs = {
  value: Scalars['String'];
};


export type QueryQueryWorker_WorkAreaArgs = {
  filter?: Maybe<Worker_WorkAreaFilter>;
  order?: Maybe<Worker_WorkAreaOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateWorker_WorkAreaArgs = {
  filter?: Maybe<Worker_WorkAreaFilter>;
};


export type QueryGetWorkstepArgs = {
  id: Scalars['ID'];
};


export type QueryQueryWorkstepArgs = {
  filter?: Maybe<WorkstepFilter>;
  order?: Maybe<WorkstepOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateWorkstepArgs = {
  filter?: Maybe<WorkstepFilter>;
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

export type UpdateWorkstepInput = {
  filter: WorkstepFilter;
  set?: Maybe<WorkstepPatch>;
  remove?: Maybe<WorkstepPatch>;
};

export type UpdateWorkstepPayload = {
  __typename?: 'UpdateWorkstepPayload';
  workstep?: Maybe<Array<Maybe<Workstep>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateWorkstepPayloadWorkstepArgs = {
  filter?: Maybe<WorkstepFilter>;
  order?: Maybe<WorkstepOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type Worker = {
  __typename?: 'Worker';
  id: Scalars['ID'];
  name: Scalars['String'];
  tlSection: Worker_TlSection;
  segment: Worker_Segment;
  workArea: Worker_WorkArea;
  worksteps?: Maybe<Array<Maybe<Workstep>>>;
  workstepsAggregate?: Maybe<WorkstepAggregateResult>;
};


export type WorkerTlSectionArgs = {
  filter?: Maybe<Worker_TlSectionFilter>;
};


export type WorkerSegmentArgs = {
  filter?: Maybe<Worker_SegmentFilter>;
};


export type WorkerWorkAreaArgs = {
  filter?: Maybe<Worker_WorkAreaFilter>;
};


export type WorkerWorkstepsArgs = {
  filter?: Maybe<WorkstepFilter>;
  order?: Maybe<WorkstepOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type WorkerWorkstepsAggregateArgs = {
  filter?: Maybe<WorkstepFilter>;
};

export type WorkerAggregateResult = {
  __typename?: 'WorkerAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
};

export type WorkerFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<StringTermFilter>;
  has?: Maybe<Array<Maybe<WorkerHasFilter>>>;
  and?: Maybe<Array<Maybe<WorkerFilter>>>;
  or?: Maybe<Array<Maybe<WorkerFilter>>>;
  not?: Maybe<WorkerFilter>;
};

export enum WorkerHasFilter {
  Name = 'name',
  TlSection = 'tlSection',
  Segment = 'segment',
  WorkArea = 'workArea',
  Worksteps = 'worksteps'
}

export type WorkerOrder = {
  asc?: Maybe<WorkerOrderable>;
  desc?: Maybe<WorkerOrderable>;
  then?: Maybe<WorkerOrder>;
};

export enum WorkerOrderable {
  Name = 'name'
}

export type WorkerPatch = {
  tlSection?: Maybe<Worker_TlSectionRef>;
  segment?: Maybe<Worker_SegmentRef>;
  workArea?: Maybe<Worker_WorkAreaRef>;
  worksteps?: Maybe<Array<Maybe<WorkstepRef>>>;
};

export type WorkerRef = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  tlSection?: Maybe<Worker_TlSectionRef>;
  segment?: Maybe<Worker_SegmentRef>;
  workArea?: Maybe<Worker_WorkAreaRef>;
  worksteps?: Maybe<Array<Maybe<WorkstepRef>>>;
};

export type Worker_Segment = {
  __typename?: 'Worker_segment';
  value: Scalars['String'];
};

export type Worker_SegmentAggregateResult = {
  __typename?: 'Worker_segmentAggregateResult';
  count?: Maybe<Scalars['Int']>;
  valueMin?: Maybe<Scalars['String']>;
  valueMax?: Maybe<Scalars['String']>;
};

export type Worker_SegmentFilter = {
  value?: Maybe<StringHashFilter>;
  has?: Maybe<Array<Maybe<Worker_SegmentHasFilter>>>;
  and?: Maybe<Array<Maybe<Worker_SegmentFilter>>>;
  or?: Maybe<Array<Maybe<Worker_SegmentFilter>>>;
  not?: Maybe<Worker_SegmentFilter>;
};

export enum Worker_SegmentHasFilter {
  Value = 'value'
}

export type Worker_SegmentOrder = {
  asc?: Maybe<Worker_SegmentOrderable>;
  desc?: Maybe<Worker_SegmentOrderable>;
  then?: Maybe<Worker_SegmentOrder>;
};

export enum Worker_SegmentOrderable {
  Value = 'value'
}

export type Worker_SegmentRef = {
  value: Scalars['String'];
};

export type Worker_TlSection = {
  __typename?: 'Worker_tlSection';
  value: Scalars['String'];
};

export type Worker_TlSectionAggregateResult = {
  __typename?: 'Worker_tlSectionAggregateResult';
  count?: Maybe<Scalars['Int']>;
  valueMin?: Maybe<Scalars['String']>;
  valueMax?: Maybe<Scalars['String']>;
};

export type Worker_TlSectionFilter = {
  value?: Maybe<StringHashFilter>;
  has?: Maybe<Array<Maybe<Worker_TlSectionHasFilter>>>;
  and?: Maybe<Array<Maybe<Worker_TlSectionFilter>>>;
  or?: Maybe<Array<Maybe<Worker_TlSectionFilter>>>;
  not?: Maybe<Worker_TlSectionFilter>;
};

export enum Worker_TlSectionHasFilter {
  Value = 'value'
}

export type Worker_TlSectionOrder = {
  asc?: Maybe<Worker_TlSectionOrderable>;
  desc?: Maybe<Worker_TlSectionOrderable>;
  then?: Maybe<Worker_TlSectionOrder>;
};

export enum Worker_TlSectionOrderable {
  Value = 'value'
}

export type Worker_TlSectionRef = {
  value: Scalars['String'];
};

export type Worker_WorkArea = {
  __typename?: 'Worker_workArea';
  value: Scalars['String'];
};

export type Worker_WorkAreaAggregateResult = {
  __typename?: 'Worker_workAreaAggregateResult';
  count?: Maybe<Scalars['Int']>;
  valueMin?: Maybe<Scalars['String']>;
  valueMax?: Maybe<Scalars['String']>;
};

export type Worker_WorkAreaFilter = {
  value?: Maybe<StringHashFilter>;
  has?: Maybe<Array<Maybe<Worker_WorkAreaHasFilter>>>;
  and?: Maybe<Array<Maybe<Worker_WorkAreaFilter>>>;
  or?: Maybe<Array<Maybe<Worker_WorkAreaFilter>>>;
  not?: Maybe<Worker_WorkAreaFilter>;
};

export enum Worker_WorkAreaHasFilter {
  Value = 'value'
}

export type Worker_WorkAreaOrder = {
  asc?: Maybe<Worker_WorkAreaOrderable>;
  desc?: Maybe<Worker_WorkAreaOrderable>;
  then?: Maybe<Worker_WorkAreaOrder>;
};

export enum Worker_WorkAreaOrderable {
  Value = 'value'
}

export type Worker_WorkAreaRef = {
  value: Scalars['String'];
};

export type Workstep = {
  __typename?: 'Workstep';
  id: Scalars['ID'];
  name: Scalars['String'];
  machineDuration: Scalars['String'];
  workDuration: Scalars['String'];
  walkDuration: Scalars['String'];
};

export type WorkstepAggregateResult = {
  __typename?: 'WorkstepAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  machineDurationMin?: Maybe<Scalars['String']>;
  machineDurationMax?: Maybe<Scalars['String']>;
  workDurationMin?: Maybe<Scalars['String']>;
  workDurationMax?: Maybe<Scalars['String']>;
  walkDurationMin?: Maybe<Scalars['String']>;
  walkDurationMax?: Maybe<Scalars['String']>;
};

export type WorkstepFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<Array<Maybe<WorkstepHasFilter>>>;
  and?: Maybe<Array<Maybe<WorkstepFilter>>>;
  or?: Maybe<Array<Maybe<WorkstepFilter>>>;
  not?: Maybe<WorkstepFilter>;
};

export enum WorkstepHasFilter {
  Name = 'name',
  MachineDuration = 'machineDuration',
  WorkDuration = 'workDuration',
  WalkDuration = 'walkDuration'
}

export type WorkstepOrder = {
  asc?: Maybe<WorkstepOrderable>;
  desc?: Maybe<WorkstepOrderable>;
  then?: Maybe<WorkstepOrder>;
};

export enum WorkstepOrderable {
  Name = 'name',
  MachineDuration = 'machineDuration',
  WorkDuration = 'workDuration',
  WalkDuration = 'walkDuration'
}

export type WorkstepPatch = {
  name?: Maybe<Scalars['String']>;
  machineDuration?: Maybe<Scalars['String']>;
  workDuration?: Maybe<Scalars['String']>;
  walkDuration?: Maybe<Scalars['String']>;
};

export type WorkstepRef = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  machineDuration?: Maybe<Scalars['String']>;
  workDuration?: Maybe<Scalars['String']>;
  walkDuration?: Maybe<Scalars['String']>;
};

export type GetWorkerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetWorkerQuery = (
  { __typename?: 'Query' }
  & { getWorker?: Maybe<(
    { __typename?: 'Worker' }
    & Pick<Worker, 'id' | 'name'>
    & { tlSection: (
      { __typename?: 'Worker_tlSection' }
      & Pick<Worker_TlSection, 'value'>
    ), segment: (
      { __typename?: 'Worker_segment' }
      & Pick<Worker_Segment, 'value'>
    ), workArea: (
      { __typename?: 'Worker_workArea' }
      & Pick<Worker_WorkArea, 'value'>
    ), worksteps?: Maybe<Array<Maybe<(
      { __typename?: 'Workstep' }
      & Pick<Workstep, 'id' | 'name' | 'machineDuration' | 'workDuration' | 'walkDuration'>
    )>>> }
  )> }
);

export type CheckWorkerNameAvailableQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type CheckWorkerNameAvailableQuery = (
  { __typename?: 'Query' }
  & { getWorker?: Maybe<(
    { __typename?: 'Worker' }
    & Pick<Worker, 'id'>
  )> }
);

export type GetWorkerFieldsAutocompleteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkerFieldsAutocompleteQuery = (
  { __typename?: 'Query' }
  & { queryWorker_tlSection?: Maybe<Array<Maybe<(
    { __typename?: 'Worker_tlSection' }
    & Pick<Worker_TlSection, 'value'>
  )>>>, queryWorker_segment?: Maybe<Array<Maybe<(
    { __typename?: 'Worker_segment' }
    & Pick<Worker_Segment, 'value'>
  )>>>, queryWorker_workArea?: Maybe<Array<Maybe<(
    { __typename?: 'Worker_workArea' }
    & Pick<Worker_WorkArea, 'value'>
  )>>> }
);

export type AllWorkersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllWorkersQuery = (
  { __typename?: 'Query' }
  & { queryWorker?: Maybe<Array<Maybe<(
    { __typename?: 'Worker' }
    & Pick<Worker, 'id' | 'name'>
  )>>> }
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
      & { tlSection: (
        { __typename?: 'Worker_tlSection' }
        & Pick<Worker_TlSection, 'value'>
      ), segment: (
        { __typename?: 'Worker_segment' }
        & Pick<Worker_Segment, 'value'>
      ), workArea: (
        { __typename?: 'Worker_workArea' }
        & Pick<Worker_WorkArea, 'value'>
      ) }
    )>>> }
  )> }
);

export type UpdateWorkstepsMutationVariables = Exact<{
  id: Scalars['ID'];
  data: Array<Maybe<WorkstepRef>> | Maybe<WorkstepRef>;
  remove: Array<WorkstepRef> | WorkstepRef;
}>;


export type UpdateWorkstepsMutation = (
  { __typename?: 'Mutation' }
  & { clearWorksteps?: Maybe<(
    { __typename?: 'UpdateWorkerPayload' }
    & { worker?: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & { worksteps?: Maybe<Array<Maybe<(
        { __typename?: 'Workstep' }
        & Pick<Workstep, 'id'>
      )>>> }
    )>>> }
  )>, updateWorker?: Maybe<(
    { __typename?: 'UpdateWorkerPayload' }
    & { worker?: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & { worksteps?: Maybe<Array<Maybe<(
        { __typename?: 'Workstep' }
        & Pick<Workstep, 'id' | 'name'>
      )>>> }
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
    tlSection {
      value
    }
    segment {
      value
    }
    workArea {
      value
    }
    worksteps {
      id
      name
      machineDuration
      workDuration
      walkDuration
    }
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
export const CheckWorkerNameAvailableDocument = gql`
    query CheckWorkerNameAvailable($name: String!) {
  getWorker(name: $name) {
    id
  }
}
    `;

/**
 * __useCheckWorkerNameAvailableQuery__
 *
 * To run a query within a React component, call `useCheckWorkerNameAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckWorkerNameAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckWorkerNameAvailableQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCheckWorkerNameAvailableQuery(baseOptions: Apollo.QueryHookOptions<CheckWorkerNameAvailableQuery, CheckWorkerNameAvailableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckWorkerNameAvailableQuery, CheckWorkerNameAvailableQueryVariables>(CheckWorkerNameAvailableDocument, options);
      }
export function useCheckWorkerNameAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckWorkerNameAvailableQuery, CheckWorkerNameAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckWorkerNameAvailableQuery, CheckWorkerNameAvailableQueryVariables>(CheckWorkerNameAvailableDocument, options);
        }
export type CheckWorkerNameAvailableQueryHookResult = ReturnType<typeof useCheckWorkerNameAvailableQuery>;
export type CheckWorkerNameAvailableLazyQueryHookResult = ReturnType<typeof useCheckWorkerNameAvailableLazyQuery>;
export type CheckWorkerNameAvailableQueryResult = Apollo.QueryResult<CheckWorkerNameAvailableQuery, CheckWorkerNameAvailableQueryVariables>;
export const GetWorkerFieldsAutocompleteDocument = gql`
    query GetWorkerFieldsAutocomplete {
  queryWorker_tlSection {
    value
  }
  queryWorker_segment {
    value
  }
  queryWorker_workArea {
    value
  }
}
    `;

/**
 * __useGetWorkerFieldsAutocompleteQuery__
 *
 * To run a query within a React component, call `useGetWorkerFieldsAutocompleteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkerFieldsAutocompleteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkerFieldsAutocompleteQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkerFieldsAutocompleteQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkerFieldsAutocompleteQuery, GetWorkerFieldsAutocompleteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkerFieldsAutocompleteQuery, GetWorkerFieldsAutocompleteQueryVariables>(GetWorkerFieldsAutocompleteDocument, options);
      }
export function useGetWorkerFieldsAutocompleteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkerFieldsAutocompleteQuery, GetWorkerFieldsAutocompleteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkerFieldsAutocompleteQuery, GetWorkerFieldsAutocompleteQueryVariables>(GetWorkerFieldsAutocompleteDocument, options);
        }
export type GetWorkerFieldsAutocompleteQueryHookResult = ReturnType<typeof useGetWorkerFieldsAutocompleteQuery>;
export type GetWorkerFieldsAutocompleteLazyQueryHookResult = ReturnType<typeof useGetWorkerFieldsAutocompleteLazyQuery>;
export type GetWorkerFieldsAutocompleteQueryResult = Apollo.QueryResult<GetWorkerFieldsAutocompleteQuery, GetWorkerFieldsAutocompleteQueryVariables>;
export const AllWorkersDocument = gql`
    query AllWorkers {
  queryWorker {
    id
    name
  }
}
    `;

/**
 * __useAllWorkersQuery__
 *
 * To run a query within a React component, call `useAllWorkersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllWorkersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllWorkersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllWorkersQuery(baseOptions?: Apollo.QueryHookOptions<AllWorkersQuery, AllWorkersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllWorkersQuery, AllWorkersQueryVariables>(AllWorkersDocument, options);
      }
export function useAllWorkersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllWorkersQuery, AllWorkersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllWorkersQuery, AllWorkersQueryVariables>(AllWorkersDocument, options);
        }
export type AllWorkersQueryHookResult = ReturnType<typeof useAllWorkersQuery>;
export type AllWorkersLazyQueryHookResult = ReturnType<typeof useAllWorkersLazyQuery>;
export type AllWorkersQueryResult = Apollo.QueryResult<AllWorkersQuery, AllWorkersQueryVariables>;
export const UpdateWorkerDocument = gql`
    mutation UpdateWorker($id: ID!, $data: WorkerPatch!) {
  updateWorker(input: {filter: {id: [$id]}, set: $data}) {
    worker {
      id
      tlSection {
        value
      }
      segment {
        value
      }
      workArea {
        value
      }
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
export const UpdateWorkstepsDocument = gql`
    mutation UpdateWorksteps($id: ID!, $data: [WorkstepRef]!, $remove: [WorkstepRef!]!) {
  clearWorksteps: updateWorker(
    input: {filter: {id: [$id]}, remove: {worksteps: $remove}}
  ) {
    worker {
      worksteps {
        id
      }
    }
  }
  updateWorker(input: {filter: {id: [$id]}, set: {worksteps: $data}}) {
    worker {
      worksteps {
        id
        name
      }
    }
  }
}
    `;
export type UpdateWorkstepsMutationFn = Apollo.MutationFunction<UpdateWorkstepsMutation, UpdateWorkstepsMutationVariables>;

/**
 * __useUpdateWorkstepsMutation__
 *
 * To run a mutation, you first call `useUpdateWorkstepsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkstepsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkstepsMutation, { data, loading, error }] = useUpdateWorkstepsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      remove: // value for 'remove'
 *   },
 * });
 */
export function useUpdateWorkstepsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkstepsMutation, UpdateWorkstepsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkstepsMutation, UpdateWorkstepsMutationVariables>(UpdateWorkstepsDocument, options);
      }
export type UpdateWorkstepsMutationHookResult = ReturnType<typeof useUpdateWorkstepsMutation>;
export type UpdateWorkstepsMutationResult = Apollo.MutationResult<UpdateWorkstepsMutation>;
export type UpdateWorkstepsMutationOptions = Apollo.BaseMutationOptions<UpdateWorkstepsMutation, UpdateWorkstepsMutationVariables>;
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