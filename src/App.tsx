import './App.css';

function App() {
  const listOfButtons = [
    'AC',
    '*',
    '/',
    'X²',
    7,
    8,
    9,
    '√',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    ',',
  ];

  return (
    <>
      <div className="bg-purple-900 rounded-lg p-9 flex items-center justify-center flex-col gap-8 shadow-xl max-w-md max-h-[720px]">
        <div className="bg-gray-300 w-full h-24 rounded-lg"></div>
        <div className="grid gap-x-8 gap-y-8">
          <div className="content">
            <>
              {listOfButtons.map((list, key) => (
                <button
                  key={key}
                  type="button"
                  className="bg-gray-300 text-black rounded-lg shadow-md py-2 px-4 "
                >
                  {list}
                </button>
              ))}
              <button
                type="button"
                className="bg-gray-300 text-black rounded-lg shadow-md py-2 px-4 igual "
              >
                =
              </button>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
