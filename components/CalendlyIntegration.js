'use client'
import { InlineWidget } from "react-calendly";

export default function CalendlyIntegration() {
    return (
        <div className="calendly-container w-screen overflow-hidden">
            <InlineWidget url="https://calendly.com/stefanos-clearstack/clearstackai-discovery-call" />
        </div>
    );
}
