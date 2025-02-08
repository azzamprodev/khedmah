import { UserdataForm } from "./_components/userdata-form";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function CreateUsernamePage() {
  const supabase = await createClient();
  const { data } = await supabase.from("profiles").select("username");

  console.log(data);

  if (data.length > 0 && data[0].username) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="container mx-auto max-w-md px-4">
        <UserdataForm />
      </div>
    </div>
  );
}
