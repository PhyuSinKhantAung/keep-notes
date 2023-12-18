'use server';
import bcrypt from 'bcrypt';
// import { auth, signIn, signOut } from "@/auth";
import { redirect } from 'next/navigation';
import { connectToDB } from './mongodb';
import UserModel from '@/models/User';
import NoteModel from '@/models/Note';
import { revalidatePath } from 'next/cache';
import toast from 'react-hot-toast';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData
// ) {
//   try {
//     await signIn("credentials", {
//       ...Object.fromEntries(formData),
//       redirect: false,
//     });
//   } catch (error) {
//     return "Wrong credentials!";
//   }
//   redirect("/");
// }

export async function logout() {
  // await signOut();
  redirect('/login');
}

// export async function getUserCredentials() {
//   // const { user } = await auth();
//   return user;
// }

export async function signup(formData: FormData) {
  try {
    connectToDB();

    const password = formData.get('password');
    const salt = await bcrypt.genSalt(10);
    // const hashedPassword = bcrypt.hash(password, salt);

    await UserModel.create({
      ...Object.fromEntries(formData),
      // password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
    return 'Failed to signup user';
  }
  redirect('/');
}

export async function addNote(formData: FormData) {
  try {
    connectToDB();

    const session = await getServerSession(options);
    const userId = session.user.id;
    let user = await UserModel.findOne({ 'auth.google.userId': userId });
    if (!user && userId) {
      user = await UserModel.create({
        name: session.user.name,
        email: session.user.email,
        auth: {
          google: {
            userId,
            valid: true,
          },
        },
      });
    }
    const payload = { ...Object.fromEntries(formData), user: user._id };

    await NoteModel.create(payload);

    revalidatePath('/notes');
  } catch (error) {
    console.log(error);
    return 'Failed to add note';
  }
}

export async function handlePinnedNote(formData: FormData) {
  try {
    connectToDB();

    const noteId = formData.get('noteId');

    const { pinned } = await NoteModel.findById(noteId);
    const payload = {
      ...(pinned ? { pinned: false } : { pinned: true }),
    };

    await NoteModel.findByIdAndUpdate(noteId, payload);

    revalidatePath('/notes');
  } catch (error) {
    console.log(error);
    return 'Failed to pin note';
  }
}

export async function handleDeleteNote(formData: FormData) {
  try {
    connectToDB();
    const noteId = formData.get('noteId');

    await NoteModel.findByIdAndDelete(noteId);

    revalidatePath('/notes');
  } catch (error) {
    console.log(error);
    return 'Failed to delete note';
  }
}

export async function handleArchiveNote(formData: FormData) {
  try {
    connectToDB();
    const noteId = formData.get('noteId');
    const { archived } = await NoteModel.findById(noteId);

    const payload = {
      ...(archived ? { archived: false } : { archived: true }),
    };

    await NoteModel.findByIdAndUpdate(noteId, payload, { new: true });

    revalidatePath('/notes');
  } catch (error) {
    console.log(error);
    return 'Failed to delete note';
  }
}
