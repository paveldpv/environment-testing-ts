import { Model, Schema, model, models } from "mongoose";
import { TDBUser } from "../Types/Types";
import {TGeoLocation} from '../Types/subtypes/TGeoLocation'

export const userSchema = new Schema<TDBUser>({
  srcPhoto: {
    type: Schema.Types.Mixed,
    default: "NOT_FOUND",
  },
  INN: String,
  email: String,
  password: String,
  phone: String,
  idUser: String,
  dateRegistrate: Date,
  lastName: {
    type: String,
    default: "не указано",
  },
  name: {
    type: String,
    default: "не указано",
  },
  surname: {
    type: String,
    default: "не указано",
  },
  nameJobTitle: {
    type: String,
    default: "не заданно",
  },
  dateBirthday: {
    type: Date,
    default: new Date(),
  },
  linksAllowed: Schema.Types.Mixed,
  safeDeleted:{
    type:Boolean,
    default:false
  }
});
export const modelUSer = models.user as Model<TDBUser>  || model<TDBUser>("user", userSchema);







export const geoLocationSchema = new Schema<TGeoLocation>({
  location: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  date: {
    type: Date,
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  idEmployee:{
    type:String,
    required:true
  },
  ip: {
    type: String,
    required: false,
    default: "не отслеживалось",
  },  
  
});

export const modelGeoLocation =
  (models.geoLocationSchema as Model<TGeoLocation>) ||
  model<TGeoLocation>("geoLocationSchema", geoLocationSchema);

