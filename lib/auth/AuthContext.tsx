import {createContext, FunctionComponent, useState, useEffect} from 'react'
import Router from 'next/router'
import {supabaseClient} from '../supabase'
import {useMessage} from '../message'
import {SupabaseAuthPayload} from './auth.types'
import {ROUTE_HOME, ROUTE_AUTH, ROUTE_PROFILE} from '../../config'


export type AuthContextProps = {
    logIn: (payload: SupabaseAuthPayload) => void,
    loading: boolean
    users: any,
    loggedIn: boolean,
    userLoading: boolean,
    role: string,
}

export const AuthContext = createContext<Partial<AuthContextProps>>({})

export const AuthProvider: FunctionComponent = ({
                                                    children,
                                                }) => {
    const [loading, setLoading] = useState(false)
    const {handleMessage} = useMessage()
    const [user, setUser] = useState(null)
    const [userLoading, setUserLoading] = useState(true)
    const [loggedIn, setLoggedin] = useState(false)
    const [role, setRole] = useState('Admin')


    const logIn = async (payload: SupabaseAuthPayload) => {
        console.log('login', payload)
        try {
            setLoading(true)

            let {data: worker, error} = await supabaseClient
                .from('worker')
                .select('*')
                .eq('email', payload.email)
                .eq('password', payload.password)

            if (error) {
                console.log('error', error)
                return
            }

            if (worker.length > 0) {
                console.log('worker', worker[0])
                setUser(worker[0])
                Router.push(ROUTE_HOME)
            }

            console.log('worker', worker)
            console.log('user', user)
            setLoading(false)
            setRole(worker[0].role)


        } catch (error) {
            handleMessage({message: error.error_description || error, type: 'error'})
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{
            users: user,
            role: role,
            logIn,
            loggedIn,
            loading,
            userLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}
