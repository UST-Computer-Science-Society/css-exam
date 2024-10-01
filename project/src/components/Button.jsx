/* eslint-disable react/prop-types */
const Button = ({ text, onClick }) => {
  return (
    <button
      className="text-lg font-bold w-auto h-[41px] p-3 rounded-lg text-white bg-accentpurple hover:drop-shadow-xl active:bg-accentorange flex items-center justify-center transition duration-300 ease-in-out max-sm:text-sm"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
