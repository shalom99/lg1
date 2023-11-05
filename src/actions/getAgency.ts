
import { authOptions } from "@/libs/auth";
import prisma from "@/libs/prismadb";
import { getServerSession } from "next-auth";


export async function getSession(){
    return await getServerSession(authOptions)
}

export default async function getAgency(agencyID: any){
    try{

        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        const currentAgency = await prisma.agencies.findUnique({
            where: {
                id: agencyID
            }
        });

        if (!currentAgency){
            return null;
        }

        return {
            ...currentAgency
        }


    }catch (error: any) {
        return null
    }
}