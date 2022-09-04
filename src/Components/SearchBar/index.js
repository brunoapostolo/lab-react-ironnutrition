import { Divider, Input } from "antd";

function SearchBar({search,setSearch}){
    function handleChange(e){
        setSearch(e.target.value)
        console.log(search)
    }

    return (
        <>
            <label>Search</label>
            <input value={search} type="text" onChange={handleChange}></input>
        </>
    )
}

export default SearchBar