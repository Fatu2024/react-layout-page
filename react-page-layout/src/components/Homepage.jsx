import EmployeeList from "./EmployeeList"
import DirectoryHeader from './DirectoryHeader'
import SearchBar from "./SearchBar"


export default function Homepage () {
    return (
        <>
        <SearchBar />
        <DirectoryHeader />
        <EmployeeList />

        </>
    )
}