import React from "react";

const ToggleLayout = ({ children, booleanActive }) => {
  if (!booleanActive) return <></>;
  return children;
}

export default ToggleLayout;

ToggleLayout.schema = {
  title: "Ativar layout",
  type: 'object',
  properties: {
    booleanActive: {
      title: 'Ativar/Desativar',
      type: 'boolean',
      default: true
   }
  }
}