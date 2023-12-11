import { useMutation } from "react-query";
import { Fetch } from "../Core/Fetch";
import { Toast } from "../Components/Toast";

export type tableAPI = {
    _id: string;
    name: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
};

type tableType = {
    name: string;
};

export function useGetTables() {
    return useMutation(
        "getTables",
        () => Fetch.get<tableAPI[]>("table"),
    );
}

export function usePostTable(tables: tableType[]) {
    return useMutation(
        "postTables",
        () =>
            Toast(Fetch.post("table", tables), {
                loading: "Cadastrando as mesas...",
                error: "Não foi possível cadastrar as mesas!",
                success: "As mesas foram cadastradas com sucesso!",
            }),
    );
}

export function useDeleteTable(id: string) {
    return useMutation(
        "deleteTable",
        () =>
            Toast(Fetch.delete(`table/${id}`), {
                loading: "Removendo a mesa...",
                error: "Não foi possível remover a mesa!",
                success: "Mesa removida com sucesso!",
            }),
    );
}
