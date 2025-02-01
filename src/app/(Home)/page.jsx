import { ServicesMarketplace } from "./_components/services-marketplace";
import { fetchServices } from "./actions";

export default async function Home() {
  let servicesData = [];
  try {
    const response = await fetchServices();

    if (!response.success) {
      console.log(response.message);
    }

    servicesData = response.data;
  } catch (error) {
    console.log(error);
  }

  return <ServicesMarketplace servicesData={servicesData} />;
}
