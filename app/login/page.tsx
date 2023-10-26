import Form from "@/components/form";
import Logo from "@/components/Logo";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center main-background">
      <div className="flex flex-col items-center gap-[51px]">
        <Logo />

        <div className="z-10 w-full sm:min-w-[500px] overflow-hidden rounded-2xl bg-white">
          <div className="flex flex-col items-start justify-center border-gray-200 bg-white px-4 py-2 pt-4 text-center sm:px-16">
            <h3 className="heading-M">Login</h3>
            <p className="text-sm text-neutral-500 my-2">
            Add your details below to get back into the app
            </p>
          </div>
          <Form type="login" />
        </div>
      </div>
    </div>
  );
}
