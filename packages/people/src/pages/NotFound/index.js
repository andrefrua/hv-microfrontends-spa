import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import NotFound from "./NotFound";

export default withStyles(styles, { name: "NotFound", withTheme: true })(
  NotFound
);
