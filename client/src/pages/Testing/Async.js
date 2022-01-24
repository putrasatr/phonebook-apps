import { Stack, Button, Input, Box } from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import { Header } from ".";
import { sleep } from "utils";

export default function AsyncForm() {
  const renderCount = 12;
  const {
    register,
    // unregister,
    reset,
    handleSubmit,
    watch,
    control,
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
    defaultValues: {
      firstName: "Putra",
      size: 20,
      // test: [{ firstName: "Bill24" }],
      // username: "bill",
    },
    // resolver: undefined,
    // context: undefined,
    // criteriaMode: "firstError",
    // shouldFocusError: true,
    // shouldUnregister: false,
    // shouldUseNativeValidation: false,
    // delayError: undefined,
  });
  const { fields, remove, append } = useFieldArray({
    name: "test",
    control,
  });
  const onSubmitAsync = async (data) => {
    await sleep(2000);
    if (data.username === "bill") {
      alert(JSON.stringify(data));
    } else {
      alert("There is an error");
    }
  };
  return (
    <>
      {" "}
      <Header
        title="Async"
        isDirty={isDirty}
        isSubmitSuccessful={isSubmitSuccessful}
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        isValid={isValid}
        isValidating={isValidating}
        submitCount={submitCount}
        touchedFields={touchedFields}
        errors={errors}
        dirtyFields={dirtyFields}
      />
      <form onSubmit={handleSubmit(onSubmitAsync)}>
        <Stack>
          <Input {...register("username")} />
          {fields.map((field, index) => {
            return (
              <input
                key={field.id}
                defaultValue={field.firstName}
                {...register(`test[${index}].firstName`)}
              />
            );
          })}
          <Box h="20px" />
          <Button
            type="button"
            onClick={() =>
              append({
                firstName: watch("test.[0].firstName"),
                lastName: "luo" + renderCount,
              })
            }
          >
            Append
          </Button>
          <Button
            type="button"
            onClick={() =>
              remove({
                firstName: "bill" + renderCount,
                lastName: "luo" + renderCount,
              })
            }
          >
            Remove
          </Button>
          <Button type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type={"submit"}>Submit</Button>
        </Stack>
      </form>
    </>
  );
}
