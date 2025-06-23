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


export const getPatientsFeedbackByTherapistId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/form/fear/therapist/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting Forms:', error);
    }
}

export const getParentsFeedbackByTherapistId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/form/parent/therapist/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting Forms: ", error);
    }
}

export const getFearFormById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/form/fear/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting form: ", error);
    }
}

export const getParentFormById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/forms/parent/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting form: ", error);
    }
}

export const getPatientsByTherapistId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/patients/${id}`);
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

export const getParentById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/parent/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting patient data:", error);
    }
}

export const getPatientWithUserEmailById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/patient-user/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting patient data:", error);
    }
}

export const getTherapistById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/therapist/${id}`)
        return response.data;
    } catch (error) {
        console.error("Error getting therapist data:", error);
    }
}

export const getSessionsByTherapistId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/sessions/therapist/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting sessions data:", error);
    }

}

export const getSessionsByPatientId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/sessions/patient/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting sessions data:", error);
    }
}

export const getSessionById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/sessions/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting session data:", error);
    }
}