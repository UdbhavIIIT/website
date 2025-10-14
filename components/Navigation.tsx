"use client";

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const { data: session, status } = useSession();
    const pathname = usePathname();

    if (status === 'loading') return null;

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo/Brand */}
                    <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                        IIIT Portal
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6">
                        {session ? (
                            <>
                                <Link
                                    href="/teams"
                                    className={`px-3 py-2 rounded-md transition-colors ${pathname === '/teams'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                        }`}
                                >
                                    Teams
                                </Link>

                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700">
                                        Welcome, {session.user.name || session.user.email}
                                    </span>
                                    {session.user.teamId && (
                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                            {session.user.isTeamLeader ? 'Team Leader' : 'Team Member'}
                                        </span>
                                    )}
                                    <button
                                        onClick={() => signOut()}
                                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/auth/signin"
                                    className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/auth/signup"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
