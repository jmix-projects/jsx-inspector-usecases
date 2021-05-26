import React, {CSSProperties} from "react";

type Union = "alpha" | "charlie"

type Props = {
    stringProp?: string
    stringRequiredProp: string
    booleanProp?: boolean
    booleanRequiredProp: boolean
    unionProp?: Union
    unionRequiredProp: Union
    numberProp: number
    numberRequiredProp?: number
    cssProp: CSSProperties
}

export const MyComponent: React.FC<Props> = ({children, cssProp})=> <div style={cssProp}>
    {children}
</div>