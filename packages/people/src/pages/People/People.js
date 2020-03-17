import React from "react";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import HvGrid from "@hv/uikit-react-core/dist/Grid";
import Table from "../../components/people/Table";
import withLayout from "../../lib/hocs/withLayout";

const People = ({ classes }) => {
  return (
    <HvGrid container>
      <HvGrid item xs={12}>
        <HvTypography variant="3xlTitle" className={classes.title}>
          People
        </HvTypography>
      </HvGrid>
      <HvGrid item xs={12}>
        <Table />
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(People);
