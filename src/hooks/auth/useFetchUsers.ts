import { useEffect, useState } from 'react';

const API_BASE_URL = process.env.VITE_API_BASE_URL || '';
export interface User {
    id: number;
    name: string;
    email: string;
}

export function useFetchUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchToken() {
            try {
                setLoading(true);
                setError(null);
                // Replace with your actual API endpoint
                const response = await fetch(`${API_BASE_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: 'yourUserId', // Replace with actual userId
                        password: 'yourPassword', // Replace with actual password
                    }),
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data: User[] = await response.json();
                setUsers(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Unknown error');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchToken();
    }, []);

    return { users, loading, error };
}