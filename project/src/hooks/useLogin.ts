import { UserWithEmailAndPassword } from "../interface/UserWithEmailAndPassword.ts"

export default async function useLogin(user: UserWithEmailAndPassword) {
    const User = user;
    return await fetch("/mocks/LoginMock.json");
}