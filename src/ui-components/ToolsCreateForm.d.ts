/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToolsCreateFormInputValues = {
    id?: number;
    tools?: string;
};
export declare type ToolsCreateFormValidationValues = {
    id?: ValidationFunction<number>;
    tools?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToolsCreateFormOverridesProps = {
    ToolsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    tools?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToolsCreateFormProps = React.PropsWithChildren<{
    overrides?: ToolsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ToolsCreateFormInputValues) => ToolsCreateFormInputValues;
    onSuccess?: (fields: ToolsCreateFormInputValues) => void;
    onError?: (fields: ToolsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToolsCreateFormInputValues) => ToolsCreateFormInputValues;
    onValidate?: ToolsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ToolsCreateForm(props: ToolsCreateFormProps): React.ReactElement;
