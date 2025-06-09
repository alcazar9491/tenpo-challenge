// Simulación de auth local

const LOCAL_STORAGE_KEY = 'fake_auth_users';
const JWT_KEY = 'fake_auth_jwt';

interface User {
  email: string;
  password: string; 
}

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function getUsers(): User[] {
  const users = localStorage.getItem(LOCAL_STORAGE_KEY);
  return users ? JSON.parse(users) : [];
}

function saveUsers(users: User[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
}

function generateFakeJWT(email: string): string {
  return btoa(`${email}.${Date.now()}`);
}

export async function signup(email: string, password: string): Promise<{ token: string }> {
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    throw new Error('User already exists');
  }
  const hashedPassword = await hashPassword(password);
  users.push({ email, password: hashedPassword });
  saveUsers(users);
  const token = generateFakeJWT(email);
  localStorage.setItem(JWT_KEY, token);
  return { token };
}

export async function signin(email: string, password: string): Promise<{ token: string }> {
  const users = getUsers();
  const hashedPassword = await hashPassword(password);
  const user = users.find(u => u.email === email && u.password === hashedPassword);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const token = generateFakeJWT(email);
  localStorage.setItem(JWT_KEY, token);
  return { token };
}

export function signout() {
  localStorage.removeItem(JWT_KEY);

}

export function getToken(): string | null {
  return localStorage.getItem(JWT_KEY);
}

export function getUserFromToken(token: string): string | null {
  try {
    const decoded = atob(token);
    // El formato es: email.timestamp
    const [email] = decoded.split('.');
    return email || null;
  } catch {
    return null;
  }
}
