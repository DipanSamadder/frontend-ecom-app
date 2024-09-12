import React from "react";

const Container = ({ className, children }) => {
  return (
    <>
      <section className={className}>
        <div className="container-xxl">{children}</div>
      </section>
    </>
  );
};

export default Container;
