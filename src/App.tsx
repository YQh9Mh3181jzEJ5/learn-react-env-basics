import { useEffect, useState } from "react";
import ColorFullMessage from "./assets/components/ColorFullMessage";

export const App = () => {
  console.log("App start");

  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);

  const onclickButton = () => {
    setNum((prev) => prev + 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

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
        カウントアップ
      </button>
      <p className="text-white">{num}</p>
      <button
        onClick={onClickToggle}
        className="p-2 bg-indigo-50 text-black rounded"
      >
        ON/OFF
      </button>
      {isShowFace && <p>適当な文字を表示する</p>}
    </div>
  );
};
