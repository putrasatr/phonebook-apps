const buttonStyles = {
  variants: {
    submit: (props) => ({
      color: "white",
      paddingLeft: "10px",
      backgroundColor: "primary.main",
      transition: "all 0.5s ease-in-out",
      ":hover": {
        color: "#dfdede",
        backgroundColor: "primary.2",
        transition: "all 0.5s ease-in-out",
      },
      ":focus": {
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
      },
    }),
  },
};

export default buttonStyles;
