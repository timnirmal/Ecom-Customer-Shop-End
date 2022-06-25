import { createClient } from '@supabase/supabase-js';
import { Provider } from 'react-supabase'

const SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';
const SUPABASE_SERVICE_KEY: string = process.env.NEXT_SERVICE_KEY || '';

const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { client as supabaseClient };

export const getServiceSupabase = () => createClient(
    SUPABASE_URL,
    SUPABASE_SERVICE_KEY
);

// React component to wrap your app
export function SupabaseProvider({ children }) {
    return <Provider value={client}>{children}</Provider>
}
