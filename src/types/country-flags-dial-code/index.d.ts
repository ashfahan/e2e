interface Country {
    flag: string
    code: string
    country: string
    dialCode: string
  }

  declare module "country-flags-dial-code" {
    export const getCountryListMap: () => Record<string, Country>
    export const getCountryDialCode = (countryCode: string) => Country["dialCode"]
    export const getCountryName = (countryCode: string) => Country["country"]
    export const getCountryFlag = (countryCode: string) => Country["flag"]
  }
