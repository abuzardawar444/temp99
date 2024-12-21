import { findCountryByCode } from "@/utils/countries";
import React from "react";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode)!;

  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}`
      : validCountry.name;
  return (
    <span className="flex justify-between items-center gap-2 item-sm">
      {validCountry.flag} {countryName}
    </span>
  );
}

export default CountryFlagAndName;
