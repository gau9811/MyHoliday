import React from "react";
import AllBackground from "../ResuableComp/AllBackground";
import InputGenerator from "../ResuableComp/InputGenerator";
const EditPage = ({ history }) => {
  console.log(history.location.pathname.split("/")[2]);
  return (
    <div>
      <AllBackground>
        <InputGenerator
          Editid={history.location.pathname.split("/")[2]}
          arraysValue={["Edit"]}
          Titleheading={"Edit Form"}
          height={440}
          width={350}
          innerWidth={330}
          Btnwidth={280}
          SubmitbuttonType={"Edit"}
        />
      </AllBackground>
    </div>
  );
};

export default EditPage;
