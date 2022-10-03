import {useState, useEffect} from 'react'
import {NextPage} from 'next'
import {NextAppPageProps} from '../types/app'
import Layout from '../components/Layout'
import {FaLock, FaGithub, FaShoppingCart} from 'react-icons/fa'
import {useAuth} from '../lib/auth'
import {useFormFields} from '../lib/utils'
import {supabaseClient} from "../lib/supabase";


// define the shape of the SignUp form's fields
type SignUpFieldProps = {
    email: string,
    password: string
}

// the value we'd like to initialize the SignUp form with
const FORM_VALUES: SignUpFieldProps = {
    email: '',
    password: ''
}

const IndexPage: NextPage<NextAppPageProps> = ({}) => {
    const {loading, users, logIn} = useAuth()

    console.log('users from', users)
    // Now since we have our form ready, what we're going to need for signing up our users
    // 1. let users provide email and password
    const [values, handleChange] = useFormFields<SignUpFieldProps>(FORM_VALUES)

    // 2. send the provided details to Supabase
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Submitting form', values)

        logIn(values)
    }

    return (
        <Layout useBackdrop={true} usePadding={false}>
            <div className="h-screen flex flex-col justify-center items-center relative">

                {/* App logo and tagline*/}
                <div className="w-full text-center mb-4 flex  flex-col place-items-center">
                    <div><FaShoppingCart className="text-gray-600 text-5xl shadow-sm"/></div>
                    <h3 className="text-3xl text-gray-600">AI<strong> ECOM</strong></h3>
                    <small>Please provide
                        your <strong>email</strong> and <strong>password</strong> and Log In
                    </small>
                </div>

                {/* Sign Up form  */}
                <form className="w-full sm:w-1/2 xl:w-1/3" onSubmit={handleSubmit}>
                    <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400"
                                placeholder="Your Email"
                                required
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password"
                                   className="block font-semibold text-gray-800 mb-2">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
                                placeholder="Your password"
                                required
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* <!-- Sign Up & Sign In form: Actions --> */}

                        <div className="flex pt-4 gap-2">
                            <button type="submit"
                                    className="flex-1 bg-gray-500 border border-gray-600 text-white py-3 rounded w-full text-center shadow"
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default IndexPage

IndexPage.defaultProps = {
    meta: {
        title: 'SupaAuth - Sign Up'
    }
}

async function LogIn(values: SignUpFieldProps) {
    console.log('Logging in', values)

    let {data: worker, error} = await supabaseClient
        .from('worker')
        .select('*')
        .eq('email', values.email)
        .eq('password', values.password)

    if (error) {
        console.log('error', error)
        return
    }

    if (worker.length > 0) {
        console.log('worker', worker)
        window.location.href = '/'
    }

    console.log('worker', worker)

    localStorage.setItem('user', JSON.stringify(worker))

}
