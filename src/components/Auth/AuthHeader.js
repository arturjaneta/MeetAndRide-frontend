import { authenticationService } from './AuthService';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser) {
        return { Authorization: `${currentUser}` };
    } else {
        return {};
    }
}