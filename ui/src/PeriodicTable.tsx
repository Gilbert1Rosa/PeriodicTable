import { useMemo } from 'react';
import Element from './Element';
import { getBlockFMatrix, getElementMatrix, getGroups } from './MatrixHelper';
import PeriodicElement from './PeriodicElement';
import './PeriodicTable.css';

function PeriodicTable(props: { elements: Element[] }) {
    const { elements } = props;
    const elementMatrix = useMemo(
        () => getElementMatrix(elements.filter(element => (Number(element.atomicNumber) <= 57 || Number(element.atomicNumber) > 71) && (Number(element.atomicNumber) <= 89 || Number(element.atomicNumber) > 103))),
        [elements]
    );

    const elementCell = (element: Element) => {
        if (element != null) {
            return <td><PeriodicElement element={element}/></td>;
        } else {
            return <td></td>;
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <td></td>
                    { getGroups().map((group, index) => <td key={index} className="group-header">{group}</td>) }
                </tr>
            </thead>
            <tbody>
                {
                    elementMatrix.map(
                        (row, index) =>
                        <tr key={index}>
                           <td>{index+1}</td>
                           { row.map(elementCell) }
                        </tr>
                    )
                }
                {
                    getBlockFMatrix(elements).map(
                        (row, index) =>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            { row.map(elementCell) }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}


export default PeriodicTable;