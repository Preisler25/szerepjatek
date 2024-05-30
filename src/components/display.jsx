export default function Display({ children }) {
    return (
        <div className="w-screen bg-slate-800 p-10 h-screen">
        {children}
        </div>
    );
}