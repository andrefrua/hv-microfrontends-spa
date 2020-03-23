import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/NewHeader";
import HvButton from "@hv/uikit-react-core/dist/Button";
import User from "@hv/uikit-react-icons/dist/Generic/User";
import { getSelection } from "../../../lib/utils/navigation";
import HitachiLogo from "../../../assets/hitachi-logo.svg";

const boxStyles = {
  width: 32,
  height: 32
};

const navigationData = [
  {
    id: "1",
    label: "People",
    path: "/people"
  }
];

const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const selection = getSelection(navigationData, pathname);

  const handleChange = (evt, selectedItem) => {
    if (selectedItem.path) history.push(selectedItem.path);
  };

  return (
    <HvHeader position="relative">
      <HvHeaderBrand
        logo={<HitachiLogo width="70px" height="25px" />}
        name="Micro People"
      />
      {
        <HvHeaderNavigation
          data={navigationData}
          selected={selection.id}
          onClick={handleChange}
        />
      }
      {
        <HvHeaderActions>
          <HvButton category="icon">
            <User boxStyles={boxStyles} />
          </HvButton>
        </HvHeaderActions>
      }
    </HvHeader>
  );
};

export default Header;
