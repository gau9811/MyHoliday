import React from "react";
import AllBackground from "../ResuableComp/AllBackground";
import InputGenerator from "../ResuableComp/InputGenerator";
const Login = () => {
  return (
    <div>
      <AllBackground>
        <InputGenerator
          arraysValue={["Email", "Password"]}
          Titleheading={"Login Form"}
          height={440}
          width={350}
          innerWidth={330}
          Btnwidth={280}
          SubmitbuttonType={"Login"}
        />
      </AllBackground>
    </div>
  );
};

export default Login;
