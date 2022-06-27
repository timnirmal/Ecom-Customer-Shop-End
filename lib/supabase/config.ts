const getEnvironmentVariable = (environmentVariable: string): string => {
    // console.log("environmentVariable", process.env);
    // console.log("environmentVariable", process.env[environmentVariable]);

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
    NEXT_PUBLIC_SUPABASE_KEY: getEnvironmentVariable("NEXT_PUBLIC_SUPABASE_URL"),
    NEXT_PUBLIC_SUPABASE_URL: getEnvironmentVariable("NEXT_PUBLIC_SUPABASE_URL"),
    NEXT_SUPABASE_SERVICE_KEY: getEnvironmentVariable("NEXT_SUPABASE_SERVICE_KEY"),
};
