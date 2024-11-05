/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDevice = /* GraphQL */ `query GetDevice($id: ID!) {
  getDevice(id: $id) {
    id
    name
    type
    typeDescription
    typeCode
    buildingId
    building {
      id
      buildingId
      name
      floorArea
      address
      address2
      city
      state
      postalCode
      country
      lat
      long
      userId
      createdAt
      updatedAt
      __typename
    }
    deviceId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDeviceQueryVariables, APITypes.GetDeviceQuery>;
export const listDevices = /* GraphQL */ `query ListDevices(
  $filter: ModelDeviceFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      type
      typeDescription
      typeCode
      buildingId
      deviceId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDevicesQueryVariables,
  APITypes.ListDevicesQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    userId
    firstName
    lastName
    email
    secondaryEmail
    jobTitle
    buildings {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      firstName
      lastName
      email
      secondaryEmail
      jobTitle
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getBuilding = /* GraphQL */ `query GetBuilding($id: ID!) {
  getBuilding(id: $id) {
    id
    buildingId
    name
    floorArea
    address
    address2
    city
    state
    postalCode
    country
    lat
    long
    devices {
      nextToken
      __typename
    }
    userId
    createdBy {
      id
      userId
      firstName
      lastName
      email
      secondaryEmail
      jobTitle
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBuildingQueryVariables,
  APITypes.GetBuildingQuery
>;
export const listBuildings = /* GraphQL */ `query ListBuildings(
  $filter: ModelBuildingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuildings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      buildingId
      name
      floorArea
      address
      address2
      city
      state
      postalCode
      country
      lat
      long
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuildingsQueryVariables,
  APITypes.ListBuildingsQuery
>;
export const listDevicesByBuilding = /* GraphQL */ `query ListDevicesByBuilding(
  $buildingId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDeviceFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevicesByBuilding(
    buildingId: $buildingId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      type
      typeDescription
      typeCode
      buildingId
      deviceId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDevicesByBuildingQueryVariables,
  APITypes.ListDevicesByBuildingQuery
>;
export const listDevicesByParent = /* GraphQL */ `query ListDevicesByParent(
  $deviceId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDeviceFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevicesByParent(
    deviceId: $deviceId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      type
      typeDescription
      typeCode
      buildingId
      deviceId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDevicesByParentQueryVariables,
  APITypes.ListDevicesByParentQuery
>;
export const getUserByEmail = /* GraphQL */ `query GetUserByEmail(
  $email: String!
  $userId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByEmail(
    email: $email
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      firstName
      lastName
      email
      secondaryEmail
      jobTitle
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserByEmailQueryVariables,
  APITypes.GetUserByEmailQuery
>;
export const listBuildingCreatedByUser = /* GraphQL */ `query ListBuildingCreatedByUser(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBuildingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuildingCreatedByUser(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buildingId
      name
      floorArea
      address
      address2
      city
      state
      postalCode
      country
      lat
      long
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuildingCreatedByUserQueryVariables,
  APITypes.ListBuildingCreatedByUserQuery
>;
