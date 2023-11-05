
import { authOptions } from "@/libs/auth";
import prisma from "@/libs/prismadb";
import { getServerSession } from "next-auth";

export async function getSession(){
    return await getServerSession(authOptions)
}

export default async function getCurrentUser(){
    try{
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        const currentUser = await prisma.accounts.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if (!currentUser){
            return null;
        }

        return {
            ...currentUser,
            // createdAt: currentUser.createdAt.toISOString(),
            // updatedAt: currentUser.updatedAt.toISOString(),
        }


    }catch (error: any) {
        return null
    }
}