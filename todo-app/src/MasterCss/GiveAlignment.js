let giveMeAlign = (e) => {
  if (e == 1) {
    let alignMent = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return alignMent;
  }

  if (e == 2) {
    let alignMent2 = {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    };
    return alignMent2;
  }

  if (e == 3) {
    let alignMent3 = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    };
    return alignMent3;
  }
  if (e == 4) {
    let alignMent4 = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      marginTop: "20px",
    };
    return alignMent4;
  }

  if (e == 5) {
    let alignMent5 = {
      display: "flex",
      justifyContent: "space-around",
      width: "1000px",
      alignItems: "center",
    };
    return alignMent5;
  }
};

module.exports = {
  giveMeAlign,
};
