import { ThemeToggle } from "./theme-toggle";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/(Main)/auth/login/actions";
import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center justify-center gap-2">
            <ThemeToggle />
            {user ? (
              <form action={signOut}>
                <Button>تسجيل الخروج</Button>
              </form>
            ) : (
              <div>
                <Link href="/auth/login">
                  <Button>تسجيل الدخول</Button>
                </Link>
              </div>
            )}
          </div>
          <Link href="/">
            <div className="text-3xl font-bold">خِدمَة</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
