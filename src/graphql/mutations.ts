/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDevice = /* GraphQL */ `mutation CreateDevice(
  $input: CreateDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  createDevice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDeviceMutationVariables,
  APITypes.CreateDeviceMutation
>;
export const updateDevice = /* GraphQL */ `mutation UpdateDevice(
  $input: UpdateDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  updateDevice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDeviceMutationVariables,
  APITypes.UpdateDeviceMutation
>;
export const deleteDevice = /* GraphQL */ `mutation DeleteDevice(
  $input: DeleteDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  deleteDevice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDeviceMutationVariables,
  APITypes.DeleteDeviceMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createBuilding = /* GraphQL */ `mutation CreateBuilding(
  $input: CreateBuildingInput!
  $condition: ModelBuildingConditionInput
) {
  createBuilding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBuildingMutationVariables,
  APITypes.CreateBuildingMutation
>;
export const updateBuilding = /* GraphQL */ `mutation UpdateBuilding(
  $input: UpdateBuildingInput!
  $condition: ModelBuildingConditionInput
) {
  updateBuilding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBuildingMutationVariables,
  APITypes.UpdateBuildingMutation
>;
export const deleteBuilding = /* GraphQL */ `mutation DeleteBuilding(
  $input: DeleteBuildingInput!
  $condition: ModelBuildingConditionInput
) {
  deleteBuilding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBuildingMutationVariables,
  APITypes.DeleteBuildingMutation
>;
