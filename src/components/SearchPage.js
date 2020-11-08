
/**
 * Intended to be an Users endpoint consumer
 * 
 * EP: https://torre.bio/api/bios/$username
 */

import Header from './Header'
import SearchBar from './SearchBar'


function SearchPage() {
    return (
        <div >
            <Header />
            <div className="App-body">
                <SearchBar />
            </div>
        </div>
    )
}

export default SearchPage