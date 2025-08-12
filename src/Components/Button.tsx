interface ButtonProps {
  btnText: string;
  btnStyle?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string
}

const Button: React.FC<ButtonProps> = ({ btnText, btnStyle, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={btnStyle}
    >
      {btnText}
    </button>
  );
};

export default Button;
