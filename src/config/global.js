export const constraints = {
  video: {
    height: window.innerWidth,
    width: window.innerHeight,
    facingMode: {
      exact: "environment"
    }
  }
};

export const barCodeConstraint = {
  constraints: {
    height: window.innerWidth,
    width: window.innerHeight,
    facingMode: "environment"
  }
};
