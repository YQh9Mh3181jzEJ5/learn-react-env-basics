import ColorFullMessage from "./assets/components/ColorFullMessage";

export const App = () => {
  const onclickButton = () => {
    alert("");
  };
  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-200">
      <h1 className="text-2xl">こんにちは！</h1>
      <ColorFullMessage color="text-indigo-200">
        お元気ですか？
      </ColorFullMessage>
      <ColorFullMessage color="text-red-500">お元気です。</ColorFullMessage>

      <button
        onClick={onclickButton}
        className="p-2 bg-indigo-50 text-black rounded"
      >
        ボタン
      </button>
    </div>
  );
};
