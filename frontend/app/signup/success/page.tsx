"use client";

import { useRouter } from "next/navigation";
import { ChefTasteImg } from "@/comp/img/ChefTasteImg";
import { Layout } from "@/comp/layout/Layout";
import { Button } from "@/comp/button/button";

export default function SignUpSuccessPage() {
    const router = useRouter();

    return (
        <Layout.Container>
            <div className="h-32">
                <div className="h-16 flex items-center justify-end">
                    <button className="text-typography py-1">pular</button>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <Layout.Title label="Conta criada!" />
                <Layout.Subtitle label="Agora vamos cadastrar o seu cardápio" />
                <div className="flex flex-col items-center">
                    <ChefTasteImg />
                </div>
            </div>
            <div className="pt-4">
                <Button.Primary
                    label="CADASTRAR CARDÁPIO"
                    onClick={() => {
                        router.push("/menu/register");
                    }}
                />
            </div>
        </Layout.Container>
    );
}
