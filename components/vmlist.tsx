'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface VM {
    id: string;
    name: string;
    status: string;
}

const VMList: React.FC = () => {
    const [vms, setVms] = useState<VM[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3000'  // ✅ Next.js API Route를 강제하도록 설정
        });

        const fetchVMs = async () => {
            try {
                console.log("🔵 Fetching VM List...");
                
                // ✅ Next.js API Route를 통해 요청하여 CORS 문제 해결
                const response = await axiosInstance.get('/api/proxmox/nodes/edu1/storage');

                console.log("🟢 API Response:", response.data);

                setVms(response.data); // API 응답 데이터 저장
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    console.error("❌ Axios error:", err.message);
                    
                    if (err.response) {
                        console.error("🔴 Response data:", err.response.data);
                        console.error("🔴 Response status:", err.response.status);
                        console.error("🔴 Response headers:", err.response.headers);
                    } else if (err.request) {
                        console.error("⚠️ Request was made but no response:", err.request);
                    }
                } else {
                    console.error("🔥 Unexpected error:", err);
                }

                setError('⚠️ Failed to fetch VM list. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchVMs();
    }, []);

    if (loading) return <div>⏳ Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>📋 VM List</h1>
            <ul>
                {vms.length > 0 ? (
                    vms.map(vm => (
                        <li key={vm.id}>
                            🖥️ {vm.name} - <strong>{vm.status}</strong>
                        </li>
                    ))
                ) : (
                    <p>⚠️ No VMs found.</p>
                )}
            </ul>
        </div>
    );
};

export default VMList;