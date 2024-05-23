import { useMemo } from 'react';
import Element from '../Element';
import { getBlockFMatrix, getElementMatrix, getGroups } from '../MatrixHelper';
import PeriodicElement from './PeriodicElement';
import './PeriodicTable.css';

function PeriodicTable(props: { elements: Element[], onElementSelected: (element: Element) => void | undefined }) {
    const { elements, onElementSelected } = props;
    const elementMatrix = useMemo(
        () => getElementMatrix(elements.filter(element => (Number(element.atomicNumber) <= 57 || Number(element.atomicNumber) > 71) && (Number(element.atomicNumber) <= 89 || Number(element.atomicNumber) > 103))),
        [elements]
    );

    const elementCell = (element: Element, index: number) => {
        if (element != null) {
            return <td key={index} onClick={() => { onElementSelected(element) }}><PeriodicElement element={element}/></td>;
        } else {
            return <td key={index}></td>;
        }
    };

    return (
        <table className="p-table">
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
                           { row.map((element, index) => { return elementCell(element, index) }) }
                        </tr>
                    )
                }
                {
                    getBlockFMatrix(elements).map(
                        (row, index) =>
                        <tr key={index}>
                            <td></td>
                            <td></td>
                            <td></td>
                            { row.map((element, index) => { return elementCell(element, index) }) }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}


export default PeriodicTable;