import React, { useState } from 'react';
import './PriceTable.css';

function PriceTable() {

    const [data, setData] = useState([
        { service: 'Služba 1', price: 'Cena 1', note: 'Poznámka 1' },
        { service: 'Služba 2', price: 'Cena 2', note: 'Poznámka 2' },
        { service: 'Služba 3', price: 'Cena 3', note: 'Poznámka 3' },
        { service: 'Služba 4', price: 'Cena 4', note: 'Poznámka 4' },
        { service: 'Služba 5', price: 'Cena 5', note: 'Poznámka 5' },
        { service: 'Služba 6', price: 'Cena 6', note: 'Poznámka 6' },
    ]);

    return (
        <div ckassName="pricetable-style">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Služba</th>
                        <th>Cena</th>
                        <th>Poznámka</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td contentEditable>{row.service}</td>
                            <td contentEditable>{row.price}</td>
                            <td contentEditable>{row.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ div>
    )
}

export default PriceTable