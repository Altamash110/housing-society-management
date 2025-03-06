import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/signin"); // Redirect to Login Page
  return null; // Prevents unnecessary rendering
}
