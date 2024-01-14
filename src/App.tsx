export const App = () => {
  const onclickButton = () => {
    alert("");
  };
  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-200">
      <h1>こんにちは！</h1>
      <p>元気ですか？</p>
      <button
        onClick={onclickButton}
        className="p-2 bg-indigo-50 text-black rounded"
      >
        ボタン
      </button>
    </div>
  );
};
