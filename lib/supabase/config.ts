const getEnvironmentVariable = (environmentVariable: string): string => {
    const unvalidatedEnvironmentVariable = process.env[environmentVariable];

    if (!unvalidatedEnvironmentVariable) {
        throw new Error(
            `Couldn't find environment variable: ${environmentVariable}`
        );
    } else {
        return unvalidatedEnvironmentVariable;
    }
};

export const config = {
    NEXT_PUBLIC_SUPABASE_URL: getEnvironmentVariable("NEXT_PUBLIC_SUPABASE_URL"),
    NEXT_SUPABASE_SERVICE_KEY: getEnvironmentVariable("NEXT_SUPABASE_SERVICE_KEY"),
};
