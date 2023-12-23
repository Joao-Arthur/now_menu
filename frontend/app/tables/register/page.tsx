"use client";

import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/comp/input/Input";
import { TableItem } from "@/feats/tables/tableItem";
import { TableAPI } from "@/lib/table/table";
import { Layout } from "@/comp/layout/Layout";

type form = {
    numberoftables: string;
};

export default function TablesRegisterPage(): ReactNode {
    const router = useRouter();
    const [currentTables, setCurrentTables] = useState<TableAPI[]>(
        [],
    );
    const { register, handleSubmit } = useForm<form>({});

    function handleOnSubmit(form: form) {
        setCurrentTables(
            new Array(Number(form.numberoftables))
                .fill(undefined).map((_, i) => ({
                    _id: String(i),
                    name: String(i),
                    userId: String(i),
                    createdAt: String(i),
                    updatedAt: String(i),
                })),
        );
        // router.push("/signup/success");
    }

    return (
        <Layout.Container>
            <div className="h-32">
                <div className="h-16 flex items-center justify-end">
                    <button
                        className="text-typography py-1"
                        onClick={() => {
                            //router.back();
                        }}
                    >
                        pular
                    </button>
                </div>
            </div>
            <Layout.Title label="Gerar QR Code" />
            {currentTables && currentTables.length
                ? (
                    <div>
                        {currentTables.map((table, index) => (
                            <TableItem
                                table={table}
                                key={table._id}
                                isLastItem={index ===
                                    currentTables.length - 1}
                                onRemove={() => {}}
                            />
                        ))}
                    </div>
                )
                : null}
            <div className="py-2">
                <form
                    className="flex flex-col"
                    onSubmit={handleSubmit(handleOnSubmit)}
                >
                    <div className="flex flex-col py-2">
                        <span className="text-typography text-sm">
                            quantas mesas tem no seu restaurante?
                        </span>
                        <Input.Number {...register("numberoftables")} />
                    </div>
                    <div className="pt-4">
                        <button className="w-full text-white font-bold bg-main rounded-lg cursor-pointer p-4 text-lg">
                            GERAR
                        </button>
                    </div>
                </form>
            </div>
        </Layout.Container>
    );
}