import React from 'react';

const Table = ({ lastName, firstName, phone, email, city, state, dob, picture }) => {
    return (
        <tbody>
            <tr>
                <th><img scr={picture} alt="Employee" /></th>
                <td>{lastName}, {firstName}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{city}, {state}</td>
                <td>{dob}</td>
            </tr>
        </tbody>
    );
};

export default Table;