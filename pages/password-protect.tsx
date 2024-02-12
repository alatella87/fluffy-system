import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PasswordProtectPage = () => {
  const router = useRouter();
  const error = router.query.error;
  return (
    <div className="container centered-everything">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl">Please enter the password</h1>
          <p>Enter Password:</p>

          <form action="/api/password-protect" method="post">
            <div className="form-control">
              {error && (
                <label className="label">
                  <span className="label-text text-error">{error}</span>
                </label>
              )}
              <div className="input-group">
                <input
                  type="text"
                  name="password"
                  className="input input-bordered"
                />
                <button className="btn">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtectPage;