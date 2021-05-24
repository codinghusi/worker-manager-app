


export default function FieldError({ message, show }) {
    return (
        <>
            {show && (
                <p> {message} </p>
            )}
        </>
    )
}