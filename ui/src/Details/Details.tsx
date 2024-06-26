import Element from '../Element';

import './Details.css';

type DetailsProps = {
    element: Element | null;
};

function Details(props : DetailsProps) {
    const { element } = props; 
    return (
        element &&
        <div className="details">
            <div className="atomic-number">{element.atomicNumber}</div>
            <div className="symbol">{element.symbol}</div>
            <div className="element-name">{element.name}</div>
            <div className="atomic-weight">{element.atomicWeight}</div>
        </div>
    );
}

export default Details;