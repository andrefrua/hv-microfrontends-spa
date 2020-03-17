import React from "react";
import Header from "../../../components/layout/Header";

const getStyles = () => ({
  content: {
    marginTop: 50, // header height
    padding: "0px 15px" // grid padding
  },
  wrapper: {
    zIndex: -1
  }
});

const withLayout = (Component, responsive = true) => props => {
  const minWidthNotResponsive = responsive ? {} : { minWidth: 1265 };
  const { wrapper, content } = getStyles();

  return (
    <div style={{ ...wrapper, ...minWidthNotResponsive }}>
      <Header />
      <section id="content" style={{ ...content }}>
        <Component {...props} />
      </section>
    </div>
  );
};

export default withLayout;
