export interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean; // Mengubah is_admin menjadi isAdmin
    emailVerifiedAt: string | null; // Mengikuti gaya camelCase untuk properti
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
