export interface User {
  id: string // "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  username: string
  mobile: string
  email: string
  status: number // 0
  description: string
  registerIp: string
  twoFactorEnable: boolean // true
  emailConfirmed: boolean // true
  mobileConfirmed: boolean // true
  countryLiving: {
    id: number // 0
    commonName: string
    officialName: string
    commonNativeName: string
    officialNativeName: string
    twoCharacterCode: string
    threeCharacterCode: string
    callingCode: string
    isActive: boolean // true
  }
  nationality: {
    id: number // 0
    commonName: string
    officialName: string
    commonNativeName: string
    officialNativeName: string
    twoCharacterCode: string
    threeCharacterCode: string
    callingCode: string
    isActive: boolean // true
  }
  companyName: string
  vat: string
  address: string
  picture: string
  firstName: string
  lastLoginIp: string
  registerDate: string // "2022-12-02T14:59:45.308Z"
  loginTimes: number // 0
  lastLoginDate: string // "2022-12-02T14:59:45.308Z"
  lastName: string
  language: {
    id: number // 0
    code: string
    name: string
  }
  role: number // 0
}

export interface SignupDto {
  softwareId: string // "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  roleId: string // "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  username: string
  mobile: string
  email: string // "Gn2FkVtiAXgNBPye0VuUD-DNYdVCi3@[439.92.8.65"
  password: string
  status: number // 0
  description: string
  registerIp: string
  twoFactorEnable: boolean // false
  emailConfirmed: boolean // false
  mobileConfirmed: boolean // false
  countryLivingId: string // "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  nationalityId: string // "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  companyName: string
  vat: string
  address: string
  firstName: string
  lastName: string
  languageId: string // "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}

export interface LoginDto {
  usernameOrEmail: string
  password: string
  languageId: number
}

export enum ROLES {
  "Admin",
  "User",
}
