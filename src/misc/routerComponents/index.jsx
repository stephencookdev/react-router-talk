import React from "react";
import { Route } from "react-router-dom";

export const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
  order,
  children
}) => (
  <Route
    render={({ location }) => (
      <AnimatorComponent uniqKey={location.pathname} order={order}>
        <CustomSwitch location={location}>{children}</CustomSwitch>
      </AnimatorComponent>
    )}
  />
);
