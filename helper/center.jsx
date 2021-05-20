
export default function Center({ children }) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
                {children}
            </div>
        </div>
    );
}