import React from "react";
import { Stack, Button, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Header } from ".";

export default function Reguler() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: {
      dirtyFields,
      errors,
      isDirty,
      isSubmitSuccessful,
      isSubmitted,
      isSubmitting,
      isValid,
      isValidating,
      submitCount,
      touchedFields,
    },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {},
    // resolver: undefined,
    // context: undefined,
    // criteriaMode: "firstError",
    // shouldFocusError: true,
    // shouldUnregister: false,
    // shouldUseNativeValidation: false,
    // delayError: undefined,
  });
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log("Watching sub", value, name, type)
    );
    return () => {
      subscription.unsubscribe();
    };
  });
  const onSubmit = (data, e) => console.log("Valid", data, e);
  const onError = (errors, e) => console.log("Error", errors, e);
  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  ));
  return (
    <>
      <Header
        title="Reguler"
        isDirty={isDirty}
        isSubmitSuccessful={isSubmitSuccessful}
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        isValid={isValid}
        isValidating={isValidating}
        submitCount={submitCount}
        touchedFields={touchedFields}
        dirtyFields={dirtyFields}
      />
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Stack>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <Select
            {...register("size", {
              deps: "",
              disabled: false,
              max: 30,
              min: 20,
              maxLength: 2,
              minLength: 2,
              pattern: /^[A-Za-z]+$/i,
              required: true,
              onBlur: (e) => {
                console.log("On Blur", e);
              },
              onChange: (e) => {
                console.log("On Change", e);
              },
              setValueAs: (v) => parseInt(v),
              shouldUnregister: true,
              validate: (value) => Number(value),
              value: 20,
              valueAsDate: false,
              valueAsNumber: true,
            })}
          />
          <Box h="20px" />
          <Button
            type="button"
            onClick={() => {
              reset(
                { firstName: null, size: 0 }
                //config in formState keep*
              );
            }}
          >
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </Stack>
        {errors.firstName?.type === "required" && "First name is required"}
      </form>
    </>
  );
}
