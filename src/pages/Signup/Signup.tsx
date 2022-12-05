import { Button, Card, FormControlLabel, IconButton, MenuItem, Select, Switch, TextField } from "@mui/material"
import { getCountryListMap } from "country-flags-dial-code"
import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { FormField } from "../../components/FormField"
import { lang } from "../../helpers/contants"
import { Header } from "../../layouts/Header"
import { URL_LOGIN } from "../../router/routes"
import { SignupDto, useSignupMutation } from "../../services"
import { Response } from "../../types/types"
import { SignupProps } from "./Signup.interface"

export const Signup: FC<SignupProps> = (props) => {
  const { className } = props

  const countrylist = getCountryListMap()
  const [showpassword, setShowpassword] = useState(false)
  const form = useForm<SignupDto>({
    defaultValues: {
      address: "",
      companyName: "",
      countryLivingId: "",
      description: "",
      email: "",
      emailConfirmed: false,
      firstName: "",
      languageId: "",
      lastName: "",
      mobile: "",
      mobileConfirmed: false,
      nationalityId: "",
      password: "",
      registerIp: "",
      roleId: "",
      softwareId: "",
      status: 0,
      twoFactorEnable: false,
      username: "",
      vat: "",
    },
  })
  const [signup] = useSignupMutation()

  const onSubmit = (value: SignupDto) => {
    toast.promise(signup(value).unwrap(), {
      error: (e: Response) => e.message ?? lang.error,
      loading: lang.loading,
      success: (e: Response) => "Signup Successful",
    })
  }

  return (
    <div className={`flex flex-wrap h-full shadow-none ${className}`}>
      <div className="flex-1 bg-loginsplash bg-center bg-cover" />
      <form className="hidden md:flex flex-1 flex-col justify-between" onSubmit={form.handleSubmit(onSubmit)}>
        <Header />
        <Card className="max-w-screen-sm mx-auto w-11/12">
          <h2 className="text-3xl">Signup</h2>
          <div className="flex flex-wrap my-5 -mx-1">
            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="address"
              label="Address"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="companyName"
              label="Company Name"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="countryLivingId"
              label="Country Living"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <Select fullWidth>
                {Object.values(countrylist).map(({ dialCode, country }) => (
                  <MenuItem key={country} value={Number(dialCode.replaceAll("+", ""))}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="nationalityId"
              label="Nationality"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <Select fullWidth>
                {Object.values(countrylist).map(({ dialCode, country }) => (
                  <MenuItem key={country} value={Number(dialCode.replaceAll("+", ""))}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="languageId"
              label="Language"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <Select fullWidth>
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Urdu"}>Urdu</MenuItem>
                <MenuItem value={"French"}>French</MenuItem>
              </Select>
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="vat"
              label="Vat"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField type="number" fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="firstName"
              label="First Name"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="lastName"
              label="Last Name"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="email"
              label="Email"
              rules={{
                required: { message: "Value is Required", value: true },
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Not a valid Email",
                },
              }}
            >
              <TextField type="email" autoComplete="email" fullWidth placeholder="test@example.com" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="mobile"
              label="Mobile"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="roleId"
              label="Role"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="username"
              label="Username"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              name="password"
              label="Password"
              control={form.control}
              rules={{
                required: { value: true, message: "Field is required" },
                minLength: { value: 8, message: "Password should be greater then 8" },
              }}
            >
              <TextField
                autoComplete="current-password"
                fullWidth
                placeholder="Please Type here"
                type={showpassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowpassword((prev) => !prev)}>
                      {showpassword ? (
                        <i className="fa-regular fa-eye text-xl" />
                      ) : (
                        <i className="fa-regular fa-eye-slash text-xl" />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="twoFactorEnable"
              label="&nbsp;"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <FormControlLabel className="px-4" control={<Switch defaultChecked />} label="Two Factor Auth" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="registerIp"
              label="Register IP"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-6/12 p-1"
              control={form.control}
              name="softwareId"
              label="Software"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField fullWidth placeholder="Please Type here" />
            </FormField>

            <FormField
              className="w-full p-1"
              control={form.control}
              name="description"
              label="Description"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField
                classes={{}}
                fullWidth
                multiline
                rows={1}
                placeholder="Please Type here"
                variant="outlined"
                hiddenLabel
              />
            </FormField>
          </div>
          <div className="flex items-center justify-between">
            <Link to={URL_LOGIN}>
              <Button color="secondary" size="small" className="font-normal -ml-1">
                Already have account ?
              </Button>
            </Link>

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </Card>
        <div>&nbsp;</div>
      </form>
    </div>
  )
}
