import { Button, Card, IconButton, TextField } from "@mui/material"
import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { FormField } from "../../components/FormField"
import { lang } from "../../helpers/contants"
import { Header } from "../../layouts/Header"
import { URL_SIGNUP } from "../../router/routes"
import { LoginDto, useLoginMutation } from "../../services"
import { Response } from "../../types/types"

import { LoginProps } from "./Login.interface"

export const Login: FC<LoginProps> = (props) => {
  const { className } = props

  const [showpassword, setShowpassword] = useState(false)
  const form = useForm<LoginDto>({
    defaultValues: { password: "", usernameOrEmail: "" },
  })

  const [login] = useLoginMutation()

  const onSubmit = (value: LoginDto) => {
    toast.promise(login(value).unwrap(), {
      error: (e: Response) => e.message ?? lang.error,
      loading: lang.loading,
      success: (e: Response) => "Login Successful",
    })
  }

  return (
    <div className={`flex flex-wrap h-full shadow-none ${className}`}>
      <form className="w-6/12 flex flex-col justify-between" onSubmit={form.handleSubmit(onSubmit)}>
        <Header />
        <Card className="max-w-screen-sm mx-auto w-11/12">
          <h2 className="text-3xl">Login</h2>
          <div className="my-5 space-y-3">
            <FormField
              control={form.control}
              name="usernameOrEmail"
              label="Username Or Email"
              rules={{
                required: { message: "Value is Required", value: true },
              }}
            >
              <TextField autoComplete="email" fullWidth placeholder="test@example.com / Test" />
            </FormField>

            <FormField
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
          </div>
          <div className="flex items-center justify-between">
            <Link to={URL_SIGNUP}>
              <Button color="secondary" size="small" className="font-normal -ml-1">
                Dont have account ?
              </Button>
            </Link>

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </Card>
        <div>&nbsp;</div>
      </form>
      <div className="w-6/12 bg-loginsplash bg-center bg-cover" />
    </div>
  )
}
