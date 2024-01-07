import Element from '../Element';

function PeriodicElement(props: { element: Element }) {
    const { element } = props;
    return (
        <div className="element-main-container">
            <div className="element-inside-container">
                <div className="atomic-number">{element.atomicNumber}</div>
                <div className="symbol">{element.symbol}</div>
                <div className="element-name">{element.name}</div>
                <div className="atomic-weight">{element.atomicWeight}</div>
            </div>
        </div>
    );
}

export default PeriodicElement;