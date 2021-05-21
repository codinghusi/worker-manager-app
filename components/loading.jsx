import { Spinner } from 'react-bootstrap';
import { findByType } from './../helper/subcomponents';

const Description = () => null;
const Success = () => null;
const Error = () => null;

export default function Loading({ request, children }) {
    const description = findByType(children, Description)?.props.children;
    const success = findByType(children, Success)?.props.children;
    const error = findByType(children, Error)?.props.children;

    return (
        <>
            {request.loading && (
                <div>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Laden...</span>
                    </Spinner>
                    {description}
                </div>
            )}

            {!request.loading && !request.error && request.data && (
                success(request.data)
            )}

            {!request.loading && (request.error || !request.data) &&  (
                error(request.error)
            )}
        </>
    )
}

Loading.Description = Description;
Loading.Success = Success;
Loading.Error = Error;