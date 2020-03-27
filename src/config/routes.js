export const routes = [
  {
    title: "Revert",
    subRoutes: [
      { title: "Single", link: "/reversion" },
      { title: "Batch", link: "/batch-reversion" }
    ]
  },
  {
    title: "Redemption",
    subRoutes: [{ title: "Redeem", link: "/redeem" }]
  },
  {
    title: "Express Lane",
    subRoutes: [
      { title: "Register Patron", link: "/express-register" },
      { title: "Remove Patron", link: "/express-removal" },
      // { title: "Check Ride Eligibility", link: "/check-ride" }
    ]
  }
  /*{
    title: "Admission Ticket",
    subRoutes: [
      { title: "Register Patron", link: "/admission-register" },
      {
        title: "Remove Patron",
        link: "admission-removal"
      }
    ]
  }*/
];
