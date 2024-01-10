"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { UploadIcon } from "@radix-ui/react-icons";
import { FaDollarSign, FaLink, FaSchool } from "react-icons/fa";
import Link from "next/link";

const navigation = [
  {
    name: "Science",
    href: "/chat/science",
    icon: FaSchool,
    current: true,
    key: "science",
  },
  {
    name: "Finance",
    href: "/chat/finance",
    icon: FaDollarSign,
    current: false,
    key: "finance",
  },
  {
    name: "Own URL",
    href: "/chat/customUrl",
    icon: FaLink,
    current: false,
    key: "customUrl",
  },
  {
    name: "Documents",
    href: "/chat/file-upload",
    icon: UploadIcon,
    current: false,
    key: "fileUpload",
  },
];

const userNavigation = [{ name: "Sign out", href: "#" }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function chatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleSignOut = async () => {
    localStorage.clear();
    await signOut();
  };

  return (
    <>
      <div>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <Image
                className="mx-auto h-10 w-auto drop-shadow-2xl"
                src={"/images/logo-blue.svg"}
                width={200}
                height={200}
                alt="Nuvento"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          passHref
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  {/* loading this section when children return value from api*/}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-12 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
                <Menu as="div" className="relative float-right flex-shrink-0">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Demo Account
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Button
                              variant={"link"}
                              type="submit"
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900",
                              )}
                              onClick={() => handleSignOut()}
                            >
                              {" "}
                              {item.name}
                            </Button>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
