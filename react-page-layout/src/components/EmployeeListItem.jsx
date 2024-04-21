import React from "react"

export default function EmployeeListItem( { employee }) {
    return (
        <>
            <div className="employee-list">
                {/* <img src="" /> */}
                <div className="employee-details">
                    <h3>Name: {employee.name}</h3>
                    <h4> <i>Position: {employee.position} </i></h4>
                </div>
            </div>
        </>
    )
}
