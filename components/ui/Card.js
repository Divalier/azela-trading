export default function Card({ children, className = "" }) {
  return (
    <div className={`border p-4 shadow rounded ${className}`}>
      {children}
    </div>
  );
}
