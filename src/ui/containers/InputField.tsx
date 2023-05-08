import * as React from "react";

export interface IInputWithLabel {
  input: JSX.Element;
  labelText: string | JSX.Element;
}

export default function InputField(props: { elements: IInputWithLabel[] }) {
  let elems: any = [];
  props.elements.forEach((elem) => {
    elems.push(
      <>
        <label
          className="p16SemiBold"
          htmlFor={elem.input.props.id}>
          {elem.labelText}
        </label>
        {elem.input}
      </>
    );
  });

  return <div className="flex flex-col [&>input]:mb-3">{elems}</div>;
}
