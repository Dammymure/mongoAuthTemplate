import { auth } from "../../auth";
import Image from "next/image";
import Logout from "../../components/Logout";
import { redirect } from "next/navigation";

const Home = async  () => {
    const session = await auth();

    if(!session?.user) redirect('/');
    return(
        <div className="flex flex-col items-center m-4">
            <h1>Welcome {session.user?.name}</h1>

            <Image
            src={session.user?.image || "/default-user-image.png"}
            alt={session.user?.name} 
            height={72}
            width={72}
            className="rounded-full"
            />
            <Logout/>
        </div>
    )
}

export default Home;