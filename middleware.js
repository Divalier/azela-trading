import { auth } from "./firebase/config";

export default function middleware(req) {
  const user = auth.currentUser;
  if (!user) {
    return Response.redirect(new URL("/auth/login", req.url));
  }
}
