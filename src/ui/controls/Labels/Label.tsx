export interface ILabelProps {
  text: string | JSX.Element;
}

export default function Label(props: ILabelProps) {
  return <div className="h-full w-full flex items-center">{props.text}</div>;
}
