import { TransactionCard } from "./_components/transaction-card";

export default async function Page({ params }) {
  const { transactionId } = await params;
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center gap-5">
      <div className="flex w-5/6 max-w-md flex-col gap-4">
        <div className="text-right">
          <h1 className="text-4xl font-bold">خِدمَة</h1>
          <p className="text-lg text-muted-foreground">
            حلول سريعة وموثوقة لاحتياجاتك
          </p>
        </div>
        <TransactionCard transactionId={transactionId} />
      </div>
    </div>
  );
}
