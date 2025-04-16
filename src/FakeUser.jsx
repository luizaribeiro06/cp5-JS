import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function FakeUser() {
    const [user, setUser] = useState({
        name: "Marcelo Amorim",
        username: "mmamorim",
        email: "marcelo@amorim.com",
        photoUrl: "https://picsum.photos/200/300",
    });

    const randomUser = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const { name, login, email, picture } = data.results[0];
            setUser({
                name: `${name.first} ${name.last}`,
                username: login.username,
                email,
                photoUrl: picture.large,
            });
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    };

    useEffect(() => {
        randomUser();
    }, []);

    return (
        <>
            <div className="flex items-center justify-between gap-1 bg-gray-200 my-1 p-2 rounded">
                <div className="flex items-center gap-2">
                    <div>
                        <img src={user.photoUrl} alt="" className="w-16 h-16 rounded-lg" />
                    </div>
                    <div className="leading-5">
                        <div className="font-semibold">
                            {user.name}
                        </div>
                        <div>
                            @{user.username}
                        </div>
                        <div className="text-gray-500">
                            {user.email}
                        </div>
                    </div>
                </div>
                <div
                    className="bg-gray-400 p-1 rounded-lg flex items-center cursor-pointer hover:bg-gray-500"
                    onClick={randomUser}
                >
                    <Icon icon="mdi-refresh" className="text-black text-3xl"/>
                </div>
            </div>
        </>
    );
}
