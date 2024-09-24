export async function checkAuth() {
    try {
        const response = await fetch('http://localhost:5000/api/user/check-auth', {
            method: 'GET',
            credentials: 'include',
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}