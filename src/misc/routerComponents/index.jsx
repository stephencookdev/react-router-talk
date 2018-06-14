import React from "react";
import { Route } from "react-router-dom";

export const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
  order,
  children,
  pathKeyGenerator = []
}) => {
  const getPathKey = pathname => {
    const matchedPath = pathKeyGenerator.find(genObj =>
      genObj.test.test(pathname)
    );
    return (matchedPath && matchedPath.pathKey) || pathname;
  };

  return (
    <Route
      render={({ location }) => (
        <AnimatorComponent
          uniqKey={getPathKey(location.pathname)}
          order={order}
        >
          <CustomSwitch location={location}>{children}</CustomSwitch>
        </AnimatorComponent>
      )}
    />
  );
};
