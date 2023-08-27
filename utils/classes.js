const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: "15px",
  },
  main: {
    marginTop: 2,
    minHeight: "80vh",
  },
  footer: {
    marginTop: 1,
    textAlign: "center",
  },
  appbar: {
    backgroundColor: "#ffffff",
    "& a": {
      color: "#324d67",
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: "space-between",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  navbarButton: {
    color: "#324d67",
    textTransform: "initial",
  },
  fullWidth: {
    width: "100%",
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: "initial",
  },
  hidden: {
    display: "none",
  },
  // search

  searchForm: {
    border: "1px solid #a6a6a6",
    backgroundColor: "#a6a6a6",
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: "#000000",
    "& ::placeholder": {
      color: "#606060",
    },
  },
  searchButton: {
    backgroundColor: "red",
    padding: 1,
    borderRadius: "0 5px 5px 0",
    "& span": {
      color: "#000000",
    },
  },
};

export default classes;
