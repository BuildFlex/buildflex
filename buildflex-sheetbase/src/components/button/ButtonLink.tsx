import {Button, ConfigProvider} from "antd";
import React from "react";

interface ButtonProps {
  title?: string,
  icon?: React.ReactNode;
  defaultBg?: string;
  defaultBorderColor?: string;
  defaultColor?: string;
  defaultActiveBg?: string;
  defaultActiveBorderColor?: string;
  defaultHoverBg?: string;
  defaultHoverBorderColor?: string;
  defaultHoverColor?: string;
  borderRadius?: number;
  styles?: object
}

const defaultStyle = {
  height: '3.6rem',
  padding: 'padding: 0.6rem 1.6rem'
}
export default function ButtonLink(props: ButtonProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: props.defaultBg ? props.defaultBg : '#F4F9F3',
            defaultBorderColor: props.defaultBorderColor ? props.defaultBorderColor : '#F4F9F3',
            defaultColor: props.defaultColor ? props.defaultColor : '#087AAF',
            defaultActiveBg: props.defaultActiveBg ? props.defaultActiveBg : "white",
            defaultActiveBorderColor: props.defaultActiveBorderColor ? props.defaultActiveBorderColor : "white",
            defaultHoverBg: props.defaultHoverBg ? props.defaultHoverBg : "white",
            defaultHoverBorderColor: props.defaultHoverBorderColor ? props.defaultHoverBorderColor : "white",
            defaultHoverColor: props.defaultHoverColor ? props.defaultHoverColor : "#087AAF",
            borderRadius: props.borderRadius ? props.borderRadius : 8,
          },
        },
      }}
    >
      <Button icon={props.icon} style={props.styles ?? defaultStyle}>{props?.title ?? props?.title}</Button>
    </ConfigProvider>
  )
}
