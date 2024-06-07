export type TGeoLocation = {
  [key:string]:any
  location: TCoordinateLocation
  date: Date;
  process: PURPOSE_USE;
  idEmployee: string;
  ip?: string;
};
export type TCoordinateLocation = {
  latitude: number;
  longitude: number;
};

export enum PURPOSE_USE {
  redact = "REDACT",
  auth = "AUTH",
  registrate = "REGISTRATE",
}
