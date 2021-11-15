const inputStyle = {
  variants: {
    primary: (props) => ({
      ...props,
      backgroundColor: "primary.main",
    }),
    secondary: () => ({
      backgroundColor: "red",
      borderRadius: "20px",
    }),
  },
};

export default inputStyle;
