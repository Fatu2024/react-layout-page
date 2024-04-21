import EmployeeListItem from './EmployeeListItem'

export default function EmployeeList () {
    const employees =[
        {name:'Fatu Musa', position: 'President and CEO'},
        {name:'Julie Taylor', position: 'VP of Marketing'},
        {name:'Eugene Lee', position: 'CFO'},
        {name:'John Williams', position: 'VP of Engineering'},
        {name:'Ray Moore', position: 'VP of Sales'},
        {name:'Paul Jones', position: 'QA Manager'}

    ];
    return (
        <>
        <div className='employee-list'>
            {employees.map((employee, index) => (
                <EmployeeListItem key={index} employee={employee} />
            ))}
        </div>
        </>
    )
}

