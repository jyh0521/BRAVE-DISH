import {create} from "zustand";

export type ReserveStatus = "READY" | "RESERVE" | "CONFIRM" | "COMPLETE"

interface reserveStatusStoreStates {
    reserveStatus: ReserveStatus,
    setReserveStatus: (status: ReserveStatus) => void;

    reserveCount: number,
    setReserveCount: (reserveCount: number) => void;
}

export const useReserveStatusStore = create<reserveStatusStoreStates>(set => ({
    reserveStatus: "READY",
    setReserveStatus: (status) => set( () => ({reserveStatus: status})),

    reserveCount: 0,
    setReserveCount: (reserveCount) => set( () => ({reserveCount: reserveCount})),
}));
