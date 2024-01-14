type ColorFullMessageProps = {
  color: string;
  // message: string;
  children: string;
};

export const ColorFullMessage = (props: ColorFullMessageProps) => {
  console.log("ColorFullMessageProps start");

  const { color, children } = props;
  return (
    <div>
      <p className={`${color}`}>{children}</p>
    </div>
  );
};
