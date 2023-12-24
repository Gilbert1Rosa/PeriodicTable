import Element from './Element';

function getEmptyMatrix(
    rowCount: number,
    columnCount: number
): Element[][] {
    return [...Array(rowCount)].fill(null).map(item => [...Array(columnCount).fill(null)]);
}

function getElementsBetween(
    elements: Element[],
    startAtomicNumber: number,
    endAtomicNumber: number
): Element[] {
    return elements.filter(element => {
        let atomicNumber = Number(element.atomicNumber);
        return atomicNumber >= startAtomicNumber && atomicNumber <= endAtomicNumber;
    });
}

export function getGroups(): number[] {
    return Array(18).fill(0).map((item, index) => index + 1);
}

export function getBlockFMatrix(
    elementData: Element[]
): Element[][] {
    const matrix = [];
    matrix.push(getElementsBetween(elementData, 58, 71));
    matrix.push(getElementsBetween(elementData, 90, 103));
    return matrix;
}

export function getElementMatrix(
    elementData: Element[]
): Element[][] {
    const matrix: Element[][] = getEmptyMatrix(7, 18);
    elementData.forEach(element => {
      let row = element.period - 1;
      let column = element.group - 1;
      matrix[row][column] = element;
    });
    return matrix;
}