/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Tools } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToolsUpdateFormInputValues = {
    id?: number;
    tools?: string;
};
export declare type ToolsUpdateFormValidationValues = {
    id?: ValidationFunction<number>;
    tools?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToolsUpdateFormOverridesProps = {
    ToolsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    tools?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToolsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ToolsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tools?: Tools;
    onSubmit?: (fields: ToolsUpdateFormInputValues) => ToolsUpdateFormInputValues;
    onSuccess?: (fields: ToolsUpdateFormInputValues) => void;
    onError?: (fields: ToolsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToolsUpdateFormInputValues) => ToolsUpdateFormInputValues;
    onValidate?: ToolsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ToolsUpdateForm(props: ToolsUpdateFormProps): React.ReactElement;
