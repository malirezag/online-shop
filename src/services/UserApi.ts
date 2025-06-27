import { supabase } from "../../supabase";

export async function loginApi({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("something went wrong");

  return data;
}

type Type = {
  email: string;
  password: string;
  name: string;
};
export async function signUpApi({ email, password, name }: Type) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) throw new Error("something went wrong");

  return data;
}

export async function getUserApi() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
export async function logoutApi() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error.message);
  }
}
export async function updateUser(password: string) {
  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    console.log(error.message);
  }
}

export async function updateUserName(name: string) {
  const { error } = await supabase.auth.updateUser({
    data: { name },
  });

  if (error) {
    console.log(error.message);
  }
}
