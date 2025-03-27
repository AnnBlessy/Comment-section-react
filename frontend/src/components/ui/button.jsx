export const Button = ({ children, onClick, variant = "primary", size = "md" }) => {
    const baseStyles = "rounded-lg font-medium transition-all duration-200";
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-black hover:bg-gray-300",
      ghost: "bg-transparent text-blue-600 hover:bg-gray-100",
    };
    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };