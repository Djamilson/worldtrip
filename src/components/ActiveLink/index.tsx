import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isDisplay = false;

  if (!shouldMatchExactHref && asPath === "/home") {
    isDisplay = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: "gray.600",
        display: isDisplay ? "none" : "block",

        letterSpacing: "5",
        textDecoration: "",
      })}
    </Link>
  );
}
