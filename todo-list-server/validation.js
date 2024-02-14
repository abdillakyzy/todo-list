import { body } from "express-validator";

//register
app.post(
  "/api/v1/users/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);

// login
app.post(
  "/api/v1/users/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);




// app.get("/api/v1/users/me", checkAuth, UserController.getMe);

// export const getMe = async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.userId);
//     if (!user) {
//       return res.status(404).json({
//         messsage: "Ползователь не найден",
//       });
//     }
//     const { password, ...userData } = user._doc;
//     res.json(userData);
//   } catch (err) {
//     res.status(500).json({
//       message: "Hет доступа",
//     });
//   }
// };
