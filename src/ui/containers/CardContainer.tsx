export default function CardContainer(props: { elements: JSX.Element[] }) {
  const elems: any = [];
  props.elements.forEach((elem) => {
    elems.push(<>{elem}</>);
  });

  return <div className="flex flex-col gap-y-3 [&>*:last-child]:mb-7.5">{elems}</div>;
}
