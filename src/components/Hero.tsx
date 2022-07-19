export default function Hero() {
    return (
        <section id="hero" class="hero">
            <section class="w-full">
                <div class="flex flex-col justify-left items-left md:my-36">
                    <h1 class="text-2xl my-1 ml-1 text-secondary">Hi, my name is</h1>
                    <h1 class="hero-title">James Durban.</h1>
                    <h2 class="font-normal text-md md:text-2xl lg:text-2xl text-quaternary">
                        I'm a software engineer currently working at{' '}
                        <a class="underline text-secondary" href="https://www.scottbrownrigg.com" target="_blank">
                            Scott Brownrigg
                        </a>
                        {" "}
                        developing web applications and automating key workflows within the business.
                    </h2>
                    <div class="flex justify-left mt-8 gap-8">
                        <a
                            id="GitHub Link"
                            class="hero-social"
                            title="GitHub Profile"
                            aria-label="Go to GitHub Profile"
                            href="https://www.github.com/james-d12"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fa-brands fa-github fa-lg"></i>
                        </a>
                        <a
                            id="Linkedin Link"
                            class="hero-social"
                            title="LinkedIn Profile"
                            aria-label="Go to LinkedIn Profile"
                            href=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fa-brands fa-linkedin fa-lg"></i>
                        </a>
                        <a
                            id="GitLab Link"
                            class="hero-social"
                            title="GitLab Profile"
                            aria-label="Go to GitLab Profile"
                            href="https://www.gitlab.com/james-d12"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fa-brands fa-gitlab fa-lg"></i>
                        </a>
                        <a
                            id="Email Link"
                            class="hero-social"
                            title="Email"
                            aria-label="Email"
                            href="mailto:james_d02@protonmail.com"
                        >
                            <i class="fa-solid fa-square-envelope fa-lg"></i>
                        </a>
                    </div>
                    <div class="flex justify-left align-items-left">
                        <a
                            href="#projects"
                            title="Go to projects"
                            class="bg-secondary hover:text-primary text-white font-bold text-xl mt-8 py-3 px-8"
                        >
                            My Projects <i class="fa-solid fa-arrow-down fa-lg"></i>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    )
}