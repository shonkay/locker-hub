import React from "react";
import classes from "./Table.module.css";

const LockerTable = (props: any) => {
    return (
        <table className={`table ${classes.Borderless}`}>
            <tbody>
                <tr>
                    <td> Small </td>
                    <td> Small </td>
                    <td> Small </td>
                    <td> Small </td>
                    <td> <button className="btn btn-success">Rent Now</button> </td>
                </tr>
                <tr>
                    <td> Small </td>
                    <td> Small </td>
                    <td> Small </td>
                    <td> Small </td>
                    <td> <button className="btn btn-success">Rent Now</button> </td>
                </tr>
            </tbody>
        </table>
    )
}

export default LockerTable;