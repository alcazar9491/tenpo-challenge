import type { JSX } from "react";
import React from "react";

import { Route, BrowserRouter, Navigate, Routes } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import Layout from "../components/layout";
import { PublicRoute } from "./PublicRoute";


const SignIn = React.lazy(() => import("pages/SignIn/SignIn"));
const SignUp = React.lazy(() => import("pages/SignUp/SignUp"));
const Dashboard = React.lazy(() => import("pages/Dashboard/Dashboard"));

export const Router = (): JSX.Element => {




  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Public routes */}

          <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Redirect any unknown routes to the dashboard or signin */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
