import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value: string) => {
    setInput(input + value);
  };

  const handleEquals = () => {
    try {
      const result = eval(input);
      setInput(input + ' = ' + result);
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

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
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('7')}
        >
          7
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('8')}
        >
          8
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('9')}
        >
          9
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('/')}
        >
          /
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('4')}
        >
          4
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('5')}
        >
          5
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('6')}
        >
          6
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('*')}
        >
          *
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('1')}
        >
          1
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('2')}
        >
          2
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('3')}
        >
          3
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('-')}
        >
          -
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('0')}
        >
          0
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('.')}
        >
          .
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={handleEquals}
        >
          =
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick('+')}
        >
          +
        </button>
        <button
          className="p-2 bg-red-500 rounded-md hover:bg-red-600 text-white col-span-4"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;