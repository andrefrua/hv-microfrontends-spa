import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import List from "./List";

export default withStyles(styles, { name: "List", withTheme: true })(List);
