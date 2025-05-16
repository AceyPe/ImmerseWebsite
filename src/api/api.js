import axios from 'axios';

const API_URL = 'http://localhost:2226/api';

export const auth = axios.create({
    baseURL: `${API_URL}/auth`,
    withCredentials: true,
});

// login
export const Login = async ({email, password}) => {
    try {
        const response = await auth.post(`/login`,
            {
                email,
                password
            });
    return response.data;
    } catch (error) {
        console.error('Error Logging in:', error);
        throw error;
    }
}

export const Register = async ({ password, name, email, age, phone, role, parentId, therapistId}) => {
    try {
        const response = await auth.post(`/register`, {
            password,
            name,
            email,
            age,
            phone,
            role,
            parentId,
            therapistId
        });
        return response.data;
    } catch (error) {
        console.error('Error Registering in:', error);
        throw error;
    }
}

export const submitForm = async (data, type) => {
    try {
        const response = await axios.post(`${API_URL}/form`, {
            data,
            type
        });

        return response.data;
    } catch (error) {
        console.error('Error Submitting Form:', error);
    }
}


export const getPatientsFeedback = async (data, type) => {
    try {
        const response = await axios.post(`${API_URL}/fear/forms`);
        return response.data;
    } catch (error) {
        console.error('Error Submitting Form:', error);
    }
}

export const getPatientsByTherapistId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/${id}/patients`);
        return response.data;
    } catch (error) {
        console.error("Error getting patients data:", error);
    }
}

export const getPatientById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/patient/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting patient data:", error);
    }
}

export const getTherapistById = async (id) => {
    console.log(id)
    try {
        const response = await axios.get(`${API_URL}/users/therapist/${id}`)
        return response.data;
    } catch (error) {
        console.error("Error getting therapist data:", error);
    }
}