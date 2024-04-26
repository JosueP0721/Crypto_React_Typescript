import { PropsWithChildren } from "react";

export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <div>
        {children}
    </div>
  )
}
