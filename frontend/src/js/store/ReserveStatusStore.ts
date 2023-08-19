import {create} from "zustand";

export type ReserveStatus = "READY" | "RESERVE" | "CONFIRM" | "COMPLETE"

interface reserveStatusStoreStates {
    reserveStatus: ReserveStatus,
    setReserveStatus: (status: ReserveStatus) => void;
}

export const useReserveStatusStore = create<reserveStatusStoreStates>(set => ({
    reserveStatus: "READY",
    setReserveStatus: (status) => set( () => ({reserveStatus: status})),
}));
