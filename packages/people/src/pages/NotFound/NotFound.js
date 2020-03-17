import React from "react";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import withLayout from "../../lib/hocs/withLayout";

const NotFound = ({ classes }) => {
  return (
    <HvTypography variant="3xlTitle" className={classes.title}>
      Not found
    </HvTypography>
  );
};

export default withLayout(NotFound);
