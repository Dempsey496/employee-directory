import React from 'react';

const Table = (props) => {
    console.log(props.picture)
    return (

        <tbody>
            <tr>
                <th scope="row"><img scr={props.picture} alt="Empoyee Picture"></img></th>
                <td>{props.lastName}, {props.firstName}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.city}, {props.state}</td>
                <td>{props.dob}</td>
            </tr>
        </tbody>

    );
};

export default Table;