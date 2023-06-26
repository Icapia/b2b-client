import { FC } from "react";

const COLORS = {
  connected: "green",
  available: "green",
  charging: "red",
  finishing: "#D68910",
  unavailable: "red",
  faulted: "red",
};

export type StatusType = 'connected' | 'available' | 'charging' | 'finishing' | 'unavailable' | 'faulted'

interface StatusI {
  status: StatusType,
}

export const Status: FC<StatusI> = ({
  status
}) => {
  return (
    <>
      <div style={{ color: COLORS[status] }}>
        <b>{status}</b>
      </div>
    </>
  );
}