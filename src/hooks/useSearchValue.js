import { useState } from 'react'

const useSearchValue = () => {
    const [searchValue, setSearchValue] = useState('');
    return {
        searchValue,
        setSearchValue
    }
}

export default useSearchValue;
