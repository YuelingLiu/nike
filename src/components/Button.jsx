const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 border  gap-2 font-montserrat text-lg leading-none
        
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : ' text-white border-coral-red   bg-coral-red'
        }  rounded-full ${fullWidth && 'w-full'}"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 w-5 h-5 rounded-full "
        />
      )}
    </button>
  );
};

export default Button;
