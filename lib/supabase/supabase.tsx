import { createClient } from '@supabase/supabase-js';
import { Provider } from 'react-supabase'
//import { config } from "./config"

console.log("environmentVariable", process.env);
//each element in process.env console.log
// for (const key in process.env) {
//     console.log("KEY",key, process.env[key]);
// }
console.log("environmentVariable URL", process.env["NEXT_PUBLIC_SUPABASE_URL"]);
console.log("environmentVariable Service", process.env["NEXT_PUBLIC_SUPABASE_KEY"]);
console.log("environmentVariable ANON", process.env["NEXT_PUBLIC_SUPABASE_KEY"]);

// const SUPABASE_URL: string = config.NEXT_PUBLIC_SUPABASE_URL || '';
// const SUPABASE_ANON_KEY: string = config.NEXT_PUBLIC_SUPABASE_KEY || '';
// const SUPABASE_SERVICE_KEY: string = config.NEXT_SUPABASE_SERVICE_KEY || '';

const SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// const SUPABASE_ANON_KEY: string = config.NEXT_PUBLIC_SUPABASE_KEY || '';
const SUPABASE_SERVICE_KEY: string = process.env.NEXT_SUPABASE_SERVICE_KEY || '';

//const SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';


const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

//const supabase = createClient(SUPABASE_URL, process.env.SERVICE_KEY);

async function getdat() {
    let {data: profiles, error} = await supabase
        .from('profiles')
        .select('*')

    console.log("profiles", profiles);
    console.log("profiles", profiles);
    console.log("profiles", profiles);
    console.log("profiles", profiles);
    console.log("profiles", profiles);
}

getdat();


//const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

//const getServiceSupabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

export { supabase as supabaseClient };
//export { getServiceSupabase as getServiceSupabaseClient };


// React component to wrap your app
export function SupabaseProvider({ children }) {
    //return <Provider value={client}>{children}</Provider>
    return <Provider value={supabase}>{children}</Provider>
}
