import { ChangeEvent, FormEvent, useState } from "react";
import { SearchForm } from "./styles";

interface SearchDevProps{
    submitDev: (name: string) => void;
}

export function SearchDev({submitDev} : SearchDevProps){
    const [searchUser, setSearchUser] = useState('')

    function changeSearchUser(event: ChangeEvent<HTMLInputElement>){
        setSearchUser(event.target.value)
    }

    function handleSearchUser(event: FormEvent){
        event.preventDefault()
        submitDev(searchUser)
        setSearchUser('')
    }

    return(
        <SearchForm onSubmit={handleSearchUser}>
            <input type="search" placeholder="Search people in GitHub" value={searchUser} onChange={changeSearchUser}/>
        </SearchForm>
    )
}