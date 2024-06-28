export interface MyButtonProps {
  text: string;
  padding: number;
  disabled: boolean;
}

export function MyButton(props: MyButtonProps) {
  return (
    <button disabled={props.disabled} style={{ padding: props.padding }}>
      {props.text}
    </button>
  );
}

export default MyButton;
