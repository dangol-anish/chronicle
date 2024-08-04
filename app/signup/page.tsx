import { signup } from "./actions";

export default function LoginPage() {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center ">
        <form className="flex flex-col  border p-4">
          <label htmlFor="username">
            Username: <input type="text" name="username" id="username" />
          </label>
          <label htmlFor="email">
            Email: <input id="email" name="email" type="email" required />
          </label>

          <label htmlFor="password">
            Password:{" "}
            <input id="password" name="password" type="password" required />
          </label>

          <button formAction={signup}>Sign up</button>
        </form>
      </div>
    </>
  );
}
