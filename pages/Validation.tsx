import * as React from 'react';
export const emailValidator = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email)
}

export const passwordValidator = (password: string) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password)
}
