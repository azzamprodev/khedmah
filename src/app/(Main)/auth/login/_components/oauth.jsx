import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { oAuthLogin } from "../actions";
const providers = [
  {
    name: "github",
    displayName: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "google",
    displayName: "Google",
    icon: <FcGoogle />,
  },
];

export const OAuthButtons = ({}) => {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      {providers.map((provider) => (
        <Button
          key={provider.name}
          variant="outline"
          type="button"
          className="w-full"
          onClick={() => oAuthLogin(provider.name)}
        >
          {provider.icon}
          {provider.displayName}
        </Button>
      ))}
    </div>
  );
};
