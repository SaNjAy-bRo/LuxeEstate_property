export const fetcher = async (url, options = {}) => {
    try {
        const res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`API Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Fetcher Error:", error);
        throw error;
    }
};
