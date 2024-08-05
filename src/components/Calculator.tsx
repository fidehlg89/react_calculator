import { PropsWithChildren, useCallback, useState } from "react";

type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  className?: string | undefined;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => (
  <button
    className={`p-2 bg-gray-200 rounded-md hover:bg-gray-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = useCallback((value: string) => {
    setInput((prevInput) => prevInput + value);
  }, []);

  const handleEquals = useCallback(() => {
    try {
      // Using Function constructor to evaluate the expression
      const result = Function(`"use strict"; return (${input})`)();
      setInput(String(result));
    } catch (error) {
      setInput("Error");
    }
  }, [input]);

  const handleClear = useCallback(() => {
    setInput("");
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>
      <input
        type="text"
        value={input}
        className="w-full p-2 pl-10 text-lg border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        readOnly
      />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {["7", "8", "9", "/"].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {["0", ".", "=", "+"].map((value) => (
          <Button
            key={value}
            onClick={
              value === "=" ? handleEquals : () => handleButtonClick(value)
            }
            className={
              value === "=" ? "bg-gray-200 rounded-md hover:bg-gray-300" : ""
            }
          >
            {value}
          </Button>
        ))}
        <Button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white col-span-4"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
