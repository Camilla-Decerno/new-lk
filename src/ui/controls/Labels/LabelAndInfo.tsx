
export interface ILabelAndInfoProps {
  primaryText: JSX.Element | string;
  secondaryText: JSX.Element | string;
}

export default function LabelAndInfo(props: ILabelAndInfoProps) {
  const {primaryText, secondaryText} = props;

  return (
    <div className="flex flex-col w-full text-start">
      <p className="p16SemiBold">{primaryText}</p>
      <p className="p14Italic">{secondaryText}</p>
    </div>
  );
}
