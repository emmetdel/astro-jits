import { createSignal } from "solid-js";

export default function LoginComponent(props: { url?: URL }) {
    const [email, setEmail] = createSignal(props.url?.searchParams.get("email") || "");
    const [password, setPassword] = createSignal("");
    const [error, _] = createSignal("");

    return (
        <div class="min-h-screen flex items-center justify-center">
            <div class="max-w-md w-full space-y-8 p-8 bg-card rounded-lg shadow-md">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-bold text-text-primary">
                        Sign in to your account
                    </h2>
                    {error() && (
                        <div class="mt-4 text-center text-sm text-error">
                            {error()}
                        </div>
                    )}
                </div>
                <form class="mt-8 space-y-6" method="post">
                    <div class="rounded-md shadow-sm space-y-4">
                        <div>
                            <label for="email" class="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email()}
                                onInput={(e) => setEmail(e.currentTarget.value)}
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-border placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label for="password" class="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password()}
                                onInput={(e) => setPassword(e.currentTarget.value)}
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-border placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                class="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                            />
                            <label
                                for="remember-me"
                                class="ml-2 block text-sm text-text-secondary"
                            >
                                Remember me
                            </label>
                        </div>

                        <div class="text-sm">
                            <a
                                href="#"
                                class="font-medium text-primary hover:text-primary-hover"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button class="w-full bg-primary text-white p-2 rounded-md">
                            Sign in
                        </button>
                    </div>

                    <div class="text-center">
                        <span class="text-text-secondary">Don't have an account?</span>
                        <a
                            href="/register"
                            class="ml-2 font-medium text-primary hover:text-primary-hover"
                        >
                            Sign up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
