import React from "react";
import { ElementType } from "react";
import { IconWrapper } from "./styled";

interface IconProps {
  icon: ElementType;
  destination: string;
}

export default function Icon({ icon: Element, destination }: IconProps) {
  return (
    <IconWrapper>
      <a href={destination} target="_blank">
        <Element />
      </a>
    </IconWrapper>
  );
}
