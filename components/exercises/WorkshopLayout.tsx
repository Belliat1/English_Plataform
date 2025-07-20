"use client";

import React from "react";

const WorkshopLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
};

export default WorkshopLayout;
