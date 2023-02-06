import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {api} from "../../lib/axios";
import { SearchDev } from "../SearchDevs";
import { Container, DataAboutUser, DescriptionUser, InformsUser, ListAboutUsers } from "./styles";

interface Devs {
    id: number,
    name: string,
    login: string,
    avatar_url: string,
    html_url: string,
    followers: number,
    following: number,
    bio?: string,
    company?: string,
    events_url: string,
}

export function Devs(){
    const [nameDev, setNameDev] = useState('')
    const [users, setUsers] = useState<Devs[]>([])

    function serachNameDev(name: string){
        setNameDev(name)
    }
    
    async function fetchApi(){
        if(nameDev != ''){
            const response = await api.get(`/users/${nameDev}`)

            setUsers([response.data, ...users])
        } else{
            const response = await api.get(`/users`)
            setUsers(response.data)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [nameDev])
    

    return(
        <Container>
           <SearchDev submitDev={serachNameDev}/>
            
            <ListAboutUsers>
                {
                    users.map(user => {
                        return(
                            <DataAboutUser key={user.id}>
                                <InformsUser>
                                    <img src={user.avatar_url} alt="" />

                                    <ul>
                                        <li>
                                            <GithubLogo size={16}/> {user.login}
                                        </li>
                                        <li>
                                            <Buildings size={16}/> {user.company === null ? <span>Estudante</span> : user.company} 
                                        </li>
                                        <li>
                                            <Users size={16}/> {user.followers}
                                        </li>
                                    </ul>
                                </InformsUser>

                            <DescriptionUser>
                                <h3>{user.name}</h3>
                                <a href={user.html_url} target='_blank'>GITHUB <ArrowUpRight weight="bold"/> </a>
                                <p>
                                {user.bio}
                                </p>
                                
                            </DescriptionUser>
                        </DataAboutUser>
                        )
                    })
                }
            </ListAboutUsers>
                
        </Container>
    )
}