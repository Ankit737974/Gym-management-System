firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) {
    alert("You must be logged in.");
    window.location.href = "../users/login.html";
    return;
  }

  const doc = await firebase.firestore().collection("users").doc(user.uid).get();
  const role = doc.exists ? doc.data().role : null;
  const path = window.location.pathname;

const allowedForMembers = [
  "/admin/dashboard.html",
  "/admin/members.html",
  "/admin/plans.html",
  "/admin/attendance.html",
  "/admin/payments.html"
];


  // Admin section access control
  if (path.includes("/admin/")) {
    if (role !== "admin" && !allowedForMembers.some(p => path.endsWith(p))) {
      alert("Access Denied: Admins Only");
      window.location.href = "../users/login.html";
    }
  }

  // Member section access control
  if (path.includes("/member/") && role !== "admin" && role !== "member") {
    alert("Access denied. Members only.");
    window.location.href = "../users/login.html";
  }

  // (optional) User section access control could go here
});
