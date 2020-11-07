import { useState } from "react"

function SearchBar() {

    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const search = (event) => {
        event.preventDefault()
        console.log(query)
    }

    return (
        <div>
            <form onSubmit={search} method="get">
                <input 
                    type="text"
                    placeholder="Enter your search"
                    onChange={handleChange}
                    value={query}
                />
            </form>
        </div>
    )
}

export default SearchBar