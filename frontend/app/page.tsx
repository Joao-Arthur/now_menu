"use client";

import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import type { SignUpInfo } from "@/lib/signUp/signUpInfo";
import { signUpInfoSchema } from "@/lib/signUp/signUpInfoSchema";
import { useSignUpStore } from "@/lib/signUp/useSignUpStore";
import { LogoImg } from "@/comp/img/LogoImg";
import { TextInput } from "@/comp/input/TextInput";

export default function SignUpPage(): ReactNode {
    const router = useRouter();
    const { setInfoForm } = useSignUpStore();
    const { register, handleSubmit } = useForm<SignUpInfo>({
        resolver: zodResolver(signUpInfoSchema),
    });

    function handleOnSubmit(form: SignUpInfo) {
        setInfoForm(form);
        router.push("/signup/address");
    }

    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="flex flex-col w-4/5 h-full">
                <div className="h-40 flex justify-center">
                    <LogoImg />
                </div>
                <h3 className="text-typography text-3xl font-bold">
                    Cadastrar
                </h3>
                <h5 className="text-typography">
                    Por favor cadastre-se para continuar.
                </h5>
                <div className="py-2">
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(handleOnSubmit)}
                    >
                        <div className="flex flex-col py-2">
                            <span className="text-typography text-sm">
                                CNPJ
                            </span>
                            <TextInput {...register("cnpj")} />
                        </div>
                        <div className="flex flex-col py-2">
                            <span className="text-typography text-sm">
                                Nome do estabelecimento
                            </span>
                            <TextInput {...register("name")} />
                        </div>
                        <div className="flex flex-col py-2">
                            <span className="text-typography text-sm">
                                Telefone
                            </span>
                            <TextInput {...register("telephone")} />
                        </div>
                        <div className="pt-4">
                            <button className="w-full text-white font-bold bg-main rounded-lg cursor-pointer p-4 text-lg">
                                Continuar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center">
                    <span>Já tem uma conta?</span>
                    <button className="text-main font-bold px-1">
                        Entrar!
                    </button>
                </div>
            </div>
        </div>
    );
}
