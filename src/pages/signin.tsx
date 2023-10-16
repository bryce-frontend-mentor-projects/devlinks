import { IconEmail, IconPassword, LogoDevlinksLarge } from "@/icons";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react";
import { Input, Button } from "@/components";

const Signin = ({
  csrfToken,
  ...rest
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("REST", rest);
  return (
    <div className="flex min-h-screen flex-col p-8 gap-16 text-dark-grey">
      <div>
        <LogoDevlinksLarge className="w-[183px] h-[40px]" />
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">Login</h2>
          <p className="text-grey">
            Add your details below to get back into the app
          </p>
        </div>
        <form
          className="bg-white"
          method="POST"
          action="/api/auth/callback/credentials"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div>
            <label>Email address</label>
            <Input
              icon={<IconEmail />}
              placeholder="e.g. alex@email.com"
              name="username"
            />
          </div>
          <div>
            <label>Password</label>
            <Input
              icon={<IconPassword />}
              type="password"
              placeholder="e.g. alex@email.com"
              name="password"
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default Signin;
