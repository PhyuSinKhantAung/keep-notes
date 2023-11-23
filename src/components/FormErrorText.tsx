import React from "react";

const FormErrorText = ({
  errors,
  fieldname,
}: {
  errors: any;
  fieldname: string;
}) => {
  return (
    <>
      {errors[`${fieldname}`] && (
        <span className="text-destructive text-sm">
          {errors[`${fieldname}`].message}.
        </span>
      )}
    </>
  );
};

export default FormErrorText;
