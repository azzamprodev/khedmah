export const ServiceCard = ({ title, description, price, creator }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border border-black bg-secondary p-2 shadow-md md:flex-row">
      <section>
        <div className="h-40 rounded-lg bg-white dark:bg-gray-900 md:w-40 lg:w-52"></div>
      </section>
      <section className="flex w-full flex-col justify-between gap-2">
        <div>
          <h1 className="text-right text-xl font-bold">{title}</h1>
          <p className="text-right text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">{price}$</h3>
          <h3 className="text-sm text-muted-foreground">{creator}</h3>
        </div>
      </section>
    </div>
  );
};
