import { db } from '../lib/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique ID generation

const createAdmin = async () => {
  const adminEmail = 'admin@example.com';
  const adminPassword = 'DdTeCh@2024'; // Choose a strong password
  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  
  // Use UUID for document ID
  const adminId = uuidv4(); // Generate a unique ID
  
  await setDoc(doc(db, 'admins', adminId), {
    email: adminEmail,
    password: hashedPassword,
  });

  console.log('Admin user created successfully.');
};

createAdmin().catch(console.error);
