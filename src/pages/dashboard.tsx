import { useContext, useEffect } from "react"
import { Can } from "../components/Can"
import { AuthContext } from "../contexts/AuthContext"
import { setupAPIClient } from "../services/api"
import { api } from "../services/apiClient"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard() {
    const { user, signOut, isAuthenticated } = useContext(AuthContext)


    useEffect(() => {
        api.get('/me')
            .then(response => console.log('dashboard', response))
    }, [])
    
    return (
        <>
            <h1>Dashboard: { user?.email }</h1>

            <button onClick={signOut}>Sign Out</button>
            
            <Can permissions={['metrics.list']}>Metrics</Can>
        </>
    )
}

export const getServerSideProps = withSSRAuth(async (context) => {
    const apiClient = setupAPIClient(context);
    const response = await apiClient.get('/me')

    console.log(response.data)

    return {
        props: {}
    }
})