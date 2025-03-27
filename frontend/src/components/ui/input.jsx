export const Input = ({ placeholder, value, onChange }) => (
    <input
      type="text"
      className="border rounded-lg p-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 margin-right-10"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );