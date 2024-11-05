/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDeviceInput = {
  id?: string | null,
  name: string,
  type: string,
  typeDescription?: string | null,
  typeCode?: string | null,
  buildingId: string,
  deviceId?: string | null,
};

export type ModelDeviceConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  typeDescription?: ModelStringInput | null,
  typeCode?: ModelStringInput | null,
  buildingId?: ModelIDInput | null,
  deviceId?: ModelIDInput | null,
  and?: Array< ModelDeviceConditionInput | null > | null,
  or?: Array< ModelDeviceConditionInput | null > | null,
  not?: ModelDeviceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Device = {
  __typename: "Device",
  id: string,
  name: string,
  type: string,
  typeDescription?: string | null,
  typeCode?: string | null,
  buildingId: string,
  building?: Building | null,
  deviceId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Building = {
  __typename: "Building",
  id: string,
  buildingId?: string | null,
  name?: string | null,
  floorArea?: number | null,
  address?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  postalCode?: string | null,
  country?: string | null,
  lat?: number | null,
  long?: number | null,
  devices?: ModelDeviceConnection | null,
  userId?: string | null,
  createdBy?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDeviceConnection = {
  __typename: "ModelDeviceConnection",
  items:  Array<Device | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  userId: string,
  firstName: string,
  lastName: string,
  email?: string | null,
  secondaryEmail?: string | null,
  jobTitle?: string | null,
  buildings?: ModelBuildingConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBuildingConnection = {
  __typename: "ModelBuildingConnection",
  items:  Array<Building | null >,
  nextToken?: string | null,
};

export type UpdateDeviceInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  typeDescription?: string | null,
  typeCode?: string | null,
  buildingId?: string | null,
  deviceId?: string | null,
};

export type DeleteDeviceInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  userId: string,
  firstName: string,
  lastName: string,
  email?: string | null,
  secondaryEmail?: string | null,
  jobTitle?: string | null,
};

export type ModelUserConditionInput = {
  userId?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  secondaryEmail?: ModelStringInput | null,
  jobTitle?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserInput = {
  id: string,
  userId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  secondaryEmail?: string | null,
  jobTitle?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateBuildingInput = {
  id?: string | null,
  buildingId?: string | null,
  name?: string | null,
  floorArea?: number | null,
  address?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  postalCode?: string | null,
  country?: string | null,
  lat?: number | null,
  long?: number | null,
  userId?: string | null,
};

export type ModelBuildingConditionInput = {
  buildingId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  floorArea?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  long?: ModelFloatInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelBuildingConditionInput | null > | null,
  or?: Array< ModelBuildingConditionInput | null > | null,
  not?: ModelBuildingConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBuildingInput = {
  id: string,
  buildingId?: string | null,
  name?: string | null,
  floorArea?: number | null,
  address?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  postalCode?: string | null,
  country?: string | null,
  lat?: number | null,
  long?: number | null,
  userId?: string | null,
};

export type DeleteBuildingInput = {
  id: string,
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  typeDescription?: ModelStringInput | null,
  typeCode?: ModelStringInput | null,
  buildingId?: ModelIDInput | null,
  deviceId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDeviceFilterInput | null > | null,
  or?: Array< ModelDeviceFilterInput | null > | null,
  not?: ModelDeviceFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  secondaryEmail?: ModelStringInput | null,
  jobTitle?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelBuildingFilterInput = {
  id?: ModelIDInput | null,
  buildingId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  floorArea?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  long?: ModelFloatInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBuildingFilterInput | null > | null,
  or?: Array< ModelBuildingFilterInput | null > | null,
  not?: ModelBuildingFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateDeviceMutationVariables = {
  input: CreateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type CreateDeviceMutation = {
  createDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    type: string,
    typeDescription?: string | null,
    typeCode?: string | null,
    buildingId: string,
    building?:  {
      __typename: "Building",
      id: string,
      buildingId?: string | null,
      name?: string | null,
      floorArea?: number | null,
      address?: string | null,
      address2?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
      lat?: number | null,
      long?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    deviceId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeviceMutationVariables = {
  input: UpdateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceMutation = {
  updateDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    type: string,
    typeDescription?: string | null,
    typeCode?: string | null,
    buildingId: string,
    building?:  {
      __typename: "Building",
      id: string,
      buildingId?: string | null,
      name?: string | null,
      floorArea?: number | null,
      address?: string | null,
      address2?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
      lat?: number | null,
      long?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    deviceId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeviceMutationVariables = {
  input: DeleteDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type DeleteDeviceMutation = {
  deleteDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    type: string,
    typeDescription?: string | null,
    typeCode?: string | null,
    buildingId: string,
    building?:  {
      __typename: "Building",
      id: string,
      buildingId?: string | null,
      name?: string | null,
      floorArea?: number | null,
      address?: string | null,
      address2?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
      lat?: number | null,
      long?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    deviceId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    email?: string | null,
    secondaryEmail?: string | null,
    jobTitle?: string | null,
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    email?: string | null,
    secondaryEmail?: string | null,
    jobTitle?: string | null,
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    email?: string | null,
    secondaryEmail?: string | null,
    jobTitle?: string | null,
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBuildingMutationVariables = {
  input: CreateBuildingInput,
  condition?: ModelBuildingConditionInput | null,
};

export type CreateBuildingMutation = {
  createBuilding?:  {
    __typename: "Building",
    id: string,
    buildingId?: string | null,
    name?: string | null,
    floorArea?: number | null,
    address?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    postalCode?: string | null,
    country?: string | null,
    lat?: number | null,
    long?: number | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      userId: string,
      firstName: string,
      lastName: string,
      email?: string | null,
      secondaryEmail?: string | null,
      jobTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBuildingMutationVariables = {
  input: UpdateBuildingInput,
  condition?: ModelBuildingConditionInput | null,
};

export type UpdateBuildingMutation = {
  updateBuilding?:  {
    __typename: "Building",
    id: string,
    buildingId?: string | null,
    name?: string | null,
    floorArea?: number | null,
    address?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    postalCode?: string | null,
    country?: string | null,
    lat?: number | null,
    long?: number | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      userId: string,
      firstName: string,
      lastName: string,
      email?: string | null,
      secondaryEmail?: string | null,
      jobTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBuildingMutationVariables = {
  input: DeleteBuildingInput,
  condition?: ModelBuildingConditionInput | null,
};

export type DeleteBuildingMutation = {
  deleteBuilding?:  {
    __typename: "Building",
    id: string,
    buildingId?: string | null,
    name?: string | null,
    floorArea?: number | null,
    address?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    postalCode?: string | null,
    country?: string | null,
    lat?: number | null,
    long?: number | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      userId: string,
      firstName: string,
      lastName: string,
      email?: string | null,
      secondaryEmail?: string | null,
      jobTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDeviceQueryVariables = {
  id: string,
};

export type GetDeviceQuery = {
  getDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    type: string,
    typeDescription?: string | null,
    typeCode?: string | null,
    buildingId: string,
    building?:  {
      __typename: "Building",
      id: string,
      buildingId?: string | null,
      name?: string | null,
      floorArea?: number | null,
      address?: string | null,
      address2?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
      lat?: number | null,
      long?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    deviceId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDevicesQueryVariables = {
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesQuery = {
  listDevices?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      name: string,
      type: string,
      typeDescription?: string | null,
      typeCode?: string | null,
      buildingId: string,
      deviceId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    email?: string | null,
    secondaryEmail?: string | null,
    jobTitle?: string | null,
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userId: string,
      firstName: string,
      lastName: string,
      email?: string | null,
      secondaryEmail?: string | null,
      jobTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuildingQueryVariables = {
  id: string,
};

export type GetBuildingQuery = {
  getBuilding?:  {
    __typename: "Building",
    id: string,
    buildingId?: string | null,
    name?: string | null,
    floorArea?: number | null,
    address?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    postalCode?: string | null,
    country?: string | null,
    lat?: number | null,
    long?: number | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      userId: string,
      firstName: string,
      lastName: string,
      email?: string | null,
      secondaryEmail?: string | null,
      jobTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBuildingsQueryVariables = {
  filter?: ModelBuildingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuildingsQuery = {
  listBuildings?:  {
    __typename: "ModelBuildingConnection",
    items:  Array< {
      __typename: "Building",
      id: string,
      buildingId?: string | null,
      name?: string | null,
      floorArea?: number | null,
      address?: string | null,
      address2?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
      lat?: number | null,
      long?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDevicesByBuildingQueryVariables = {
  buildingId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesByBuildingQuery = {
  listDevicesByBuilding?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      name: string,
      type: string,
      typeDescription?: string | null,
      typeCode?: string | null,
      buildingId: string,
      deviceId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDevicesByParentQueryVariables = {
  deviceId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesByParentQuery = {
  listDevicesByParent?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      name: string,
      type: string,
      typeDescription?: string | null,
      typeCode?: string | null,
      buildingId: string,
      deviceId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByEmailQueryVariables = {
  email: string,
  userId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByEmailQuery = {
  getUserByEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userId: string,
      firstName: string,
      lastName: string,
      email?: string | null,
      secondaryEmail?: string | null,
      jobTitle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBuildingCreatedByUserQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuildingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuildingCreatedByUserQuery = {
  listBuildingCreatedByUser?:  {
    __typename: "ModelBuildingConnection",
    items:  Array< {
      __typename: "Building",
      id: string,
      buildingId?: string | null,
      name?: string | null,
      floorArea?: number | null,
      address?: string | null,
      address2?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
      lat?: number | null,
      long?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};
