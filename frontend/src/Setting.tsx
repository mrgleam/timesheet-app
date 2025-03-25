// import React from 'react';
// import { Box, Typography, TextField, Button, Paper, Divider } from '@mui/material';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';

// // Define types for the form data
// type ProfileFormData = {
//   email: string;
//   name: string;
//   surname: string;
// };

// type PasswordFormData = {
//   password: string;
//   confirmPassword: string;
// };

// // Create separate validation schemas
// const profileSchema = z.object({
//   email: z.string().email().nonempty(),
//   name: z.string().max(255, 'Name must be 255 characters or less').nonempty('Name is required'),
//   surname: z.string().max(255, 'Surname must be 255 characters or less').nonempty('Surname is required'),
// });

// const passwordSchema = z.object({
//   password: z.string().min(8, 'Password must be at least 8 characters'),
//   confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
// }).refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords don't match",
//   path: ['confirmPassword'],
// });

// function Setting() {
//   // Profile form
//   const { 
//     control: profileControl, 
//     handleSubmit: handleProfileSubmit, 
//     formState: { errors: profileErrors } 
//   } = useForm<ProfileFormData>({
//     resolver: zodResolver(profileSchema),
//     defaultValues: {
//       email: 'john.doe@example.com',
//       name: '',
//       surname: '',
//     },
//   });

//   // Password form
//   const { 
//     control: passwordControl, 
//     handleSubmit: handlePasswordSubmit, 
//     formState: { errors: passwordErrors } 
//   } = useForm<PasswordFormData>({
//     resolver: zodResolver(passwordSchema),
//     defaultValues: {
//       password: '',
//       confirmPassword: '',
//     },
//   });

//   const onProfileSubmit = (data: ProfileFormData) => {
//     console.log('Profile data submitted:', data);
//     // Handle profile update logic here
//   };

//   const onPasswordSubmit = (data: PasswordFormData) => {
//     console.log('Password data submitted:', data);
//     // Handle password change logic here
//   };

//   return (
//     <Box sx={{ mt: 4, maxWidth: '800px', margin: '0 auto' }}>
//       <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
//         Settings
//       </Typography>
      
//       {/* Edit Profile Section */}
//       <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
//         <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
//           Profile Information
//         </Typography>
//         <form onSubmit={handleProfileSubmit(onProfileSubmit)}>
//           <Controller
//             name="email"
//             control={profileControl}
//             render={({ field }) => (
//               <TextField 
//                 {...field} 
//                 label="Email" 
//                 variant="outlined" 
//                 fullWidth 
//                 margin="normal" 
//                 disabled 
//               />
//             )}
//           />
//           <Controller
//             name="name"
//             control={profileControl}
//             render={({ field }) => (
//               <TextField 
//                 {...field} 
//                 label="Name" 
//                 variant="outlined" 
//                 fullWidth 
//                 margin="normal" 
//                 error={!!profileErrors.name} 
//                 helperText={profileErrors.name?.message} 
//               />
//             )}
//           />
//           <Controller
//             name="surname"
//             control={profileControl}
//             render={({ field }) => (
//               <TextField 
//                 {...field} 
//                 label="Surname" 
//                 variant="outlined" 
//                 fullWidth 
//                 margin="normal" 
//                 error={!!profileErrors.surname} 
//                 helperText={profileErrors.surname?.message} 
//               />
//             )}
//           />
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//             <Button 
//               type="submit" 
//               variant="contained" 
//               color="primary"
//             >
//               Save Profile
//             </Button>
//           </Box>
//         </form>
//       </Paper>
      
//       {/* Change Password Section */}
//       <Paper elevation={2} sx={{ p: 3 }}>
//         <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
//           Change Password
//         </Typography>
//         <form onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
//           <Controller
//             name="password"
//             control={passwordControl}
//             render={({ field }) => (
//               <TextField 
//                 {...field} 
//                 label="New Password" 
//                 type="password" 
//                 variant="outlined" 
//                 fullWidth 
//                 margin="normal" 
//                 error={!!passwordErrors.password} 
//                 helperText={passwordErrors.password?.message} 
//               />
//             )}
//           />
//           <Controller
//             name="confirmPassword"
//             control={passwordControl}
//             render={({ field }) => (
//               <TextField 
//                 {...field} 
//                 label="Confirm Password" 
//                 type="password" 
//                 variant="outlined" 
//                 fullWidth 
//                 margin="normal" 
//                 error={!!passwordErrors.confirmPassword} 
//                 helperText={passwordErrors.confirmPassword?.message} 
//               />
//             )}
//           />
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//             <Button 
//               type="submit" 
//               variant="contained" 
//               color="primary"
//             >
//               Update Password
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// }

// export default Setting; 