import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Details from "./Details";

export default withStyles(styles, { name: "Details", withTheme: true })(Details);
