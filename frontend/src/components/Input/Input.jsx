import React from "react";
import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import "./styles.css";

function Input({ name, label, type = "text", ...props }) {
    return (
        <div style={{ marginBottom: "16px" }}>
            <Field name={name}>
                {({ field, meta }) => (
                    <TextField
                        {...field}
                        {...props}
                        label={label}
                        type={type}
                        variant="outlined"
                        fullWidth
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                        className="input"
                    />
                )}
            </Field>
        </div>
    );
}

export default Input;
