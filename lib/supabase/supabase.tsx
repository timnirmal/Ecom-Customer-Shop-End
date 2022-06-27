import { createClient } from '@supabase/supabase-js';
import { Provider } from 'react-supabase'


const SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';
const SERVICE_KEY: string = process.env.NEXT_SUPABASE_SERVICE_KEY || '';

console.log("SUPABASE_URL", SUPABASE_URL)
console.log("SUPABASE_ANON_KEY", SUPABASE_ANON_KEY)
console.log("SERVICE_KEY", SERVICE_KEY)


const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabase as supabaseClient };


// React component to wrap your app
export function SupabaseProvider({ children }) {
    //return <Provider value={client}>{children}</Provider>
    return <Provider value={supabase}>{children}</Provider>
}
