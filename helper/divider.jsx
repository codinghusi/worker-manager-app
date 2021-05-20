
export default function Divider({ children }) {
    if (children?.length) {
        return (
            <div className="row">
                <div className="col"><hr  /></div>
                <div className="col-auto">{ children }</div>
                <div className="col"><hr /></div>
            </div>
        );
    }
    return <hr />;
}