import { render } from '@testing-library/react';
import PeriodicElement from './PeriodicElement';


test('Render one periodic element', () => {
    const hidrogen = {
        symbol: "H",
        name: "Hidrogen",
        atomicNumber: "1",
        atomicWeight: "1",
        electronicConfiguration: "1s^1",
        period: 1,
        group: 1
    };
    render(<PeriodicElement element={hidrogen}/>);
});