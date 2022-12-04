import { ChangeEvent } from "react"
import { Controller, FieldValues } from "react-hook-form"
import { FormFieldProps } from "./FormField.interfaces"

export const FormField = <T extends FieldValues = FieldValues>(props: FormFieldProps<T>): JSX.Element => {
  const {
    ExtraElement,
    className,
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    label,
    children,
    infoText,
    transform,
    onChange,
    valueAsNumber,
    hideError,
    noLabelTag,
    ...rest
  } = props

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState: { error } }) => {
        const change = (event: ChangeEvent<HTMLInputElement & HTMLSelectElement>, ...rest: any[]) => {
          let val: any = event
          if (event.target) {
            const { type, checked, value } = event.target
            val = type === "checkbox" ? checked : value
          }
          onChange?.(val)
          return field.onChange(transform ? transform(val) : val, ...rest)
        }

        const newLocal = (
          <>
            {label && <div className="mb-1">{label}</div>}
            {typeof children === "function"
              ? children({ ...field, error, checked: field.value, onChange: change })
              : { ...children, props: { ...field, error, checked: field.value, onChange: change, ...children.props } }}
            <div className="flex items-center justify-between text-xs">
              {!hideError && (
                <div className={`text-red-600 transition-[height] h-4 ${error?.message ? "mt-1" : "h-0"}`}>
                  <span>{error?.message}</span>
                </div>
              )}
              {infoText && <div className="italic text-gray-500 mt-1">{infoText}</div>}
            </div>
            {ExtraElement?.(field)}
          </>
        )

        if (noLabelTag)
          return (
            <div className={`block ${className}`} {...rest}>
              {newLocal}
            </div>
          )

        return (
          <label className={`block ${className}`} {...rest}>
            {newLocal}
          </label>
        )
      }}
    />
  )
}
