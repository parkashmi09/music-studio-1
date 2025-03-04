const ToggleSwitch = ({ isActive, onChange }) => {
  return (
    <div 
      className="relative inline-block w-[51px] h-[20px] cursor-pointer flex items-center"
      onClick={onChange}
    >
      <div className={`absolute inset-0 ${isActive ? 'bg-red-500' : 'bg-green-500'}`}>
        {/* Background color container */}
      </div>
      <div 
        className={`absolute w-4 h-4 bg-white transition-all duration-200 top-1/2 -translate-y-1/2 ${
          isActive ? 'right-1' : 'left-1'
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;