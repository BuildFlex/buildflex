import React, { forwardRef } from "react";
import { Button as AntButton } from 'antd';
const _Button =  () => (
    <AntButton type="primary">Primary Button</AntButton>
);
export const Button = forwardRef(_Button);
