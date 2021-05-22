import { Spinner } from 'react-bootstrap';
import { findByType } from './../helper/subcomponents';

const Description = () => null;
const Success = () => null;
const Error = () => null;

export default function Loading({ request, field, children }) {
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

            {!request.loading && !request.error && request.data[field] && (
                success(request.data[field])
            )}

            {!request.loading && (request.error || !request.data[field]) &&  (
                error(request.error)
            )}
        </>
    )
}

Loading.Description = Description;
Loading.Success = Success;
Loading.Error = Error;