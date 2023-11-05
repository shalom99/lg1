
import { authOptions } from "@/libs/auth";
import prisma from "@/libs/prismadb";
import { getServerSession } from "next-auth";



export async function getSession(){
    return await getServerSession(authOptions)
}

export default async function getAgent(agentID: number){
    try{
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        const currentAgent = await prisma.agents.findUnique({
            where: {
                id: agentID
            }
        });

        if (!currentAgent){
            return null;
        }
      
        return {
            ...currentAgent
        }


    }catch (error: any) {
        return null
    }
}