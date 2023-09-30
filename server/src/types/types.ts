export interface Address {
  subAdministrativeArea: string;
  label: string;
  streetAddress: string;
  countryCode: string;
  stateCode: string;
  administrativeArea: string;
  streetName: string;
  formattedAddressLines: string[];
  mapItemFullAddress: string;
  fullThroroughfare: string;
  areaOfInterest: string[];
  locality: string;
  country: string;
}

export interface Location {
  positionType: string;
  verticalAccuracy: number;
  longitude: number;
  floorLevel: number;
  isInaccurate: boolean;
  isOld: boolean;
  horizontalAccuracy: number;
  latitude: number;
  timeStamp: number;
  altitude: number;
  locationFinished: boolean;
}

export interface Features {
  [key: string]: boolean;
}

export interface DeviceInfo {
  deviceModel: string;
  lowPowerMode: boolean;
  passcodeLength: number;
  itemGroup?: any;
  id: string;
  batteryStatus: string;
  audioChannels: any[];
  lostModeCapable: boolean;
  snd?: any;
  batteryLevel: number;
  locationEnabled: boolean;
  isConsideredAccessory: boolean;
  address: Address;
  location?: Location;
  modelDisplayName: string;
  deviceColor: string;
  activationLocked: boolean;
  rm2State: number;
  locFoundEnabled: boolean;
  nwd: boolean;
  deviceStatus: string;
  remoteWipe?: any;
  fmlyShare: boolean;
  thisDevice: boolean;
  lostDevice?: any;
  lostModeEnabled: boolean;
  deviceDisplayName: string;
  safeLocations: any[];
  name: string;
  canWipeAfterLock: boolean;
  isMac: boolean;
  rawDeviceModel: string;
  baUUID: string;
  trackingInfo?: any;
  features: Features;
  deviceDiscoveryId: string;
  prsId: string;
  scd: boolean;
  locationCapable: boolean;
  remoteLock?: any;
  wipeInProgress: boolean;
  darkWake: boolean;
  deviceWithYou: boolean;
  maxMsgChar: number;
  deviceClass: string;
  crowdSourcedLocation?: Location;
}

export interface ProductInformation {
  manufacturerName: string;
  modelName: string;
  productIdentifier: number;
  vendorIdentifier: number;
  antennaPower: number;
}

export interface ProductType {
  type: string;
  productInformation: ProductInformation;
}

export interface Role {
  name: string;
  emoji: string;
  identifier: number;
}

export interface ItemInfo {
  partInfo?: any;
  isFirmwareUpdateMandatory: boolean;
  productType: ProductType;
  safeLocations: {
    type: number;
    approvalState: number;
    name: string;
    identifier: string;
    location: Location;
    address: Address;
  }[];
  owner: string;
  batteryStatus: number;
  serialNumber: string;
  lostModeMetadata?: any;
  capabilities: number;
  identifier: string;
  address: Address;
  location: Location;
  productIdentifier: string;
  isAppleAudioAccessory: boolean;
  crowdSourcedLocation: Location;
  groupIdentifier?: any;
  role: Role;
  systemVersion: string;
  name: string;
}

export type DeviceInfoArray = DeviceInfo[];
export type ItemInfoArray = ItemInfo[];

export interface LogEntry {
  address: object;
  name: string;
  emoji: string;
  latitude: number;
  longitude: number;
  date: string;
  time: string;
  timestamp: number;
}
