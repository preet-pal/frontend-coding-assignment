import { useState } from "react";

type Props = {
  id: string,
  label: string,
}

function wait(milliseconds: number) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) { }
}

const getErrorMessage = (input: string) => (input.length > 0 && input.length < 5) ? 'Minimum input length of 5 characters' : null;

export default function FormInput({ id, label }: Props) {
  const [errorMessage, setErrorMessage] = useState(null);

  // This component is a bit slow to render...
  wait(25);

  return (
    <div className="flex items-center">
      <label htmlFor={id} className="flex-1">{label}</label>
      <div className="flex-1">
        <input
          type="text"
          id={id}
          name={id}
          className="w-full border rounded p-2"
          onInput={(e) => setErrorMessage(getErrorMessage(e.currentTarget.value))}
        />
        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
}
