import PolicyPage, { policyMetadata } from "@/components/PolicyPage";

export const metadata = policyMetadata("Cancellation Policy", "/cancellation-policy/");

export default function CancellationPolicy() {
  return <PolicyPage title="Cancellation Policy" />;
}
