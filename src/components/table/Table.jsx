import React from 'react';

const Table = (props) => {
    return (

        <tbody>
            <tr>
                {/* <th scope="row"><img scr={state.picture.thumbnail} alt="Test"></img></th> */}
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