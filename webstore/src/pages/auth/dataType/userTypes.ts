export type SignUpData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber?: string;
    confirmPassword: string;
}

export type LoginData = {
    email: string;
    password: string;
}

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    role: 'customer' | 'admin';
    address?: string;
    createdAt: Date;
    updatedAt: Date;
}