import { ServiceCard } from "@/components/service-card";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { CheckoutForm } from "./_components/checkout-form";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

export default async function Checkout({ params }) {
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

  return (
    <div>
      {/* Main wrapper */}
      <div className="flex h-screen flex-col gap-2 p-5 md:flex-row md:gap-0 md:p-0">
        <section className="flex flex-col md:w-5/12 md:items-center md:justify-center md:bg-primary-foreground lg:w-1/2">
          <div className="flex flex-col text-right md:items-center md:gap-2">
            <Link href={"/"}>
              <h1 className="text-4xl font-bold md:text-4xl lg:text-6xl">
                خِدمَة
              </h1>
            </Link>
            <p className="text-lg text-muted-foreground lg:text-xl">
              حلول سريعة وموثوقة لاحتياجاتك
            </p>
          </div>
        </section>

        <section className="flex h-screen flex-col items-center justify-center md:w-7/12 lg:w-1/2">
          <div className="flex w-full flex-col gap-2 md:w-10/12 xl:w-2/3">
            <div className="flex items-center justify-end">
              <Link
                href={`/services/${serviceId}`}
                className="flex items-center justify-center gap-1 text-muted-foreground underline-offset-4 hover:underline"
              >
                عودة للخدمة
                <ChevronsRight />
              </Link>
            </div>
            <ServiceCard serviceData={serviceData} />
            <CheckoutForm serviceData={serviceData} />
          </div>
        </section>
      </div>
    </div>
  );
}
