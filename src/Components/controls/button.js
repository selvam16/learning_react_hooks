import React from "react";
import { Button as MUIButton, makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));
const Button = (props) => {
  const classes = styles();
  const { text, size, color, variant, onClick, ...others } = props;
  return (
    <MUIButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...others}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
