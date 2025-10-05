export interface IButton {
  buttonText: string;
}

const Button = ({ buttonText }: IButton) => {
  return (
    <div className="min-w-14 p-1 text-center rounded-xs cursor-pointer">
      {buttonText}
    </div>
  );
};

export default Button;
