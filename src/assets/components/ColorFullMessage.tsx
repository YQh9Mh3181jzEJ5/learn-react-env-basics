type ColorFullMessageProps = {
  color: string;
  // message: string;
  children: string;
};

const ColorFullMessage = (props: ColorFullMessageProps) => {
  const { color, children } = props;
  return (
    <div>
      <p className={`${color}`}>{children}</p>
    </div>
  );
};

export default ColorFullMessage;
