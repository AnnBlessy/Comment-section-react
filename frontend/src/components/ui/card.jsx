// components/ui/card.jsx
export const Card = ({ children, className = "" }) => (
    <div className={`border rounded-lg shadow-sm p-4 ${className}`}>{children}</div>
  );
  
export const CardContent = ({ children }) => <div>{children}</div>;
  