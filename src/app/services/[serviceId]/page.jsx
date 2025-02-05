import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ServiceInfo } from "./_components/service-info";

export default async function Service({ params }) {
  const { serviceId } = await params;
  const supabase = await createClient();
  const { data: serviceData } = await supabase
    .from("services")
    .select("*, profiles(full_name, username)")
    .eq("id", serviceId)
    .single();

  if (!serviceData) {
    redirect("/");
  }

  console.log(serviceData);

  return (
    <section className="container mx-auto px-4">
      <ServiceInfo serviceData={serviceData} />
    </section>
  );
}
