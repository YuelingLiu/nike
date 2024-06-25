const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 border rounded-full bg-coral-red gap-2 font-montserrat text-lg leading-none text-white border-coral-red">
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
