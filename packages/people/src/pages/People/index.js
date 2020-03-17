import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import People from "./People";

export default withStyles(styles, { name: "People", withTheme: true })(People);
