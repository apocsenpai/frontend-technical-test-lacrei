import React, { PropsWithChildren } from "react";
import { ButtonStyled } from "./styled";

interface ButtonProps extends PropsWithChildren {
  fill: Boolean;
}

export default function Button({ fill, children }: ButtonProps) {
  return (
    <ButtonStyled className={fill ? "fill" : "outline"}>
      {children}
    </ButtonStyled>
  );
}
