import { Children, cloneElement } from 'react';

// export default function IconWithText({ children }) {
//     const newChildren = Children.map(children, child => {
//         const itsProps = child.props ?? { };
//         const className = itsProps.className ?? '' + " align-center";
//         const props = { ...itsProps, className };
//         console.log("props", props);
//         return cloneElement(child, props);
//     });
//     return <> {newChildren} </>;
// }

// FIXME: Not common spacing

export default function IconWithText({ children }) {
    return (
        <>
            <style type="text/css">
                {`
                svg {
                    vertical-align: middle;
                    font-size: 1.1em;
                    margin-right: 0.2rem;
                }
                `}
            </style>
        
            {children}
        </>
    )
}