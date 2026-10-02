import PolicyPage, { policyMetadata } from "@/components/PolicyPage";

export const metadata = policyMetadata("Privacy Policy", "/privacy-policy/");

export default function PrivacyPolicy() {
  return <PolicyPage title="Privacy Policy" />;
}
