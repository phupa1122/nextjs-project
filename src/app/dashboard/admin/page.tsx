import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboardPage() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:8000/api/dashboard/admin", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMessage(response.data.message);
            } catch (error) {
                setMessage("Unauthorized");
            }
        };

        fetchData();
    }, []);

    return <h1>{message}</h1>;
}
