import { User } from "../../../services/identity"

export interface AuthStore {
  accessToken?: string
  user?: User
}
