import { cookies as getCookies } from "next/headers";

interface Props {
    prefix: string;
    value: string;
}

export const generateAuthCookie = async ({
    prefix,
    value,
}: Props) => {
    const cookies = await getCookies();
          cookies.set({
            name: `${prefix}-token`,
            value: value,
            httpOnly: true,
            path: "/",
            // TODO: Ensure cross-domain cookie sharing
            // maindomain.com // initial cookie
            // sub.maindomain.com // cookie does not exist here
            // sameSite: "none",
            // domain: "",
          });
}