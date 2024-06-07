import { describe, expect, test } from "@jest/globals";
import { TDBUser } from "../Types/Types";
import { TGeoLocation } from "../Types/subtypes/TGeoLocation";
import { unionFunc } from "./UnionFunc";
import { connect } from "mongoose";
import { DB_URL, testINN } from "../../../configs/configDB";
import { MockDataTestUnionFunc } from "../../../configs/mockData";
import { modelGeoLocation, modelUSer } from "../DB/schemas";

describe("union fun", () => {
  test("union func", async () => {
    const getDataUser = async (): Promise<TDBUser[]> => {
      await connect(`${DB_URL}${testINN}`);
      const res = JSON.parse(JSON.stringify(await modelUSer.find({})));
      return res;
    };

    const getDataGeolocation = async (): Promise<TGeoLocation[]> => {
      await connect(`${DB_URL}${testINN}`);

      const res = JSON.parse(JSON.stringify(await modelGeoLocation.find({})));

      return res;
    };

    expect(unionFunc(await getDataGeolocation(), await getDataUser(), "idEmployee", "idUser")).toEqual(MockDataTestUnionFunc);
  });
});

