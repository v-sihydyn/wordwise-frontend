import { LogOut } from 'lucide-react';
import { logoutAction } from '@/app/(auth)/actions';

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit">
        <LogOut className="h-6 w-6 hover:text-primary" />
      </button>
    </form>
  );
}
