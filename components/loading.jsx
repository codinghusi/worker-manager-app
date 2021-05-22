import { Loader } from 'semantic-ui-react';
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
                <Loader> {description} </Loader>
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