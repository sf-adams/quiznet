export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <header className="pt-4">
        <h1 className="text-3xl font-bold text-white font-display text-center">
          Haikupad
        </h1>
      </header>

      {/* create an input */}
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center w-1/2">
          <input
            type="text"
            placeholder="Line 1..."
            className="bg-transparent border-2 rounded-md px-4 py-2 border-white text-white font-body"
          />
          {/* <textarea
            className="w-full h-64 p-4 text-xl font-medium text-black bg-white rounded-lg shadow-lg font-body"
            placeholder="Write your haiku here..."
          /> */}
          {/* <button className="px-4 py-2 mt-4 text-xl font-medium text-white bg-blue-500 rounded-lg shadow-lg">
            Submit
          </button> */}
        </div>
      </main>
    </div>
  );
}
