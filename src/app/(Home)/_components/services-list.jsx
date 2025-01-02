import { ServiceCard } from "./service-card";
import { cn } from "@/lib/utils";

export const ServiceList = ({ grid }) => {
  const serviceData = [
    {
      title: "خدمة",
      description: "هذه خدمة للتجربة فقط",
      price: 30,
      creator: "عزام الزيدي",
    },
    {
      title: "إنشاء موقع",
      description: "هذه خدمة لإنشاء موقع",
      price: 100,
      creator: "عزام الزيدي",
    },
    {
      title: "تصميم موقع",
      description: "هذه خدمة لتصميم موقع",
      price: 50,
      creator: "عزام الزيدي",
    },
    {
      title: "تطوير موقع",
      description: "هذه خدمة لتطوير موقع",
      price: 80,
      creator: "عزام الزيدي",
    },
  ];

  return (
    <div
      className={
        grid
          ? "grid grid-cols-2 gap-2 lg:grid-cols-3"
          : "grid grid-cols-1 gap-2"
      }
    >
      {serviceData.map((serviceData) => {
        return (
          <ServiceCard
            key={serviceData.title}
            title={serviceData.title}
            description={serviceData.description}
            price={serviceData.price}
            creator={serviceData.creator}
          />
        );
      })}
    </div>
  );
};
