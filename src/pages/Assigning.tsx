
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import Actions from "@/components/Actions";
import { CandidateStatus } from "@/types/index";
import { currentUser,notifications } from "@/data/mockData";
import { Navbar } from "@/components/Navbar";

export default function Assigning() {
    const [status, setStatus] = useState<CandidateStatus>("PENDING_WFM");

    return (
        <div>
            <Navbar user={currentUser} notifications={notifications} />

            <div className="max-w-xl mx-auto mt-10">
                <Actions status={status} setStatus={setStatus} />
                <ProgressBar status={status} />
            </div>
        </div>
    );
}
