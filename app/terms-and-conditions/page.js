import PolicyPage, { policyMetadata } from "@/components/PolicyPage";

export const metadata = policyMetadata("Terms & Conditions", "/terms-and-conditions/");

export default function Terms() {
  return <PolicyPage title="Terms & Conditions" />;
}
