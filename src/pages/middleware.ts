import { getSession, withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

/// This middleware guards all the routes of the app
/// by redirecting the user to the login page if 
/// there is not a valid active session.
export default withMiddlewareAuthRequired(
    {
        returnTo: '/dashboard'
    }
);