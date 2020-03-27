// H.O.C
import asyncComponent from "./hoc/asyncComponent";

// Async Routes
const asyncLogin = asyncComponent(() => import("./routes/login"));
const asyncHome = asyncComponent(() => import("./routes/home"));

// Reversion
const asyncSingleReversion = asyncComponent(() =>
  import("./routes/single-reversion")
);
const asyncBatchReversion = asyncComponent(() =>
  import("./routes/batch-reversion")
);

// Redeem
const asyncRedeem = asyncComponent(() => import("./routes/redeem"));

// Express Lane
const asyncExpressRegister = asyncComponent(() =>
  import("./routes/express-register")
);
const asyncExpressRemoval = asyncComponent(() =>
  import("./routes/express-removal")
);
// const asyncCheckRide = asyncComponent(() => import("./routes/check-ride"));

// Admission Ticket
// const asyncAdmissionRegister = asyncComponent(() =>
//   import("./routes/admission-register")
// );
// const asyncAdmissionRemoval = asyncComponent(() =>
//   import("./routes/admission-removal")
// );

// Routes
export const routes = [
  { path: "/", component: asyncHome },
  { path: "/login", component: asyncLogin },
  { path: "/reversion", component: asyncSingleReversion },
  { path: "/batch-reversion", component: asyncBatchReversion },
  { path: "/redeem", component: asyncRedeem },
  { path: "/express-register", component: asyncExpressRegister },
  { path: "/express-removal", component: asyncExpressRemoval }
  // { path: "/check-ride", component: asyncCheckRide },
  // { path: "/admission-register", component: asyncAdmissionRegister },
  // { path: "/admission-removal", component: asyncAdmissionRemoval }
];
