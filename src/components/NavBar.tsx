import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Drawer, Menu } from "@mantine/core";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  handleContactClick?: () => void;
  handleEventsClick?: () => void;
}

export const NavBar = ({ handleContactClick, handleEventsClick }: Props) => {
  const { isAuth } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-custom-purple flex w-full items-center justify-between py-8 px-4">
      <div className="relative h-[85px] w-[150px] cursor-pointer">
        <Image
          src="https://s3-alpha-sig.figma.com/img/a0a9/6dd1/683a06538d5745deef0256084da2741e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PsrQJ6siV2-mLH3Cf6G6iDYdbxKcvztw-CTXrHCHJwLVEnl2p9nSwSoAwCDo333jPFx5k1hwQ~RJXQMFaEKG~OZ49SIEMjbTy5A~9gsCtDdmJmQhNxZSQ3Zp-AYb~ZKrchz23P3yhkEkaocXbz4miZUjvU2~Yb1vNT4krzVab2yYzNhvvDFGZNGQfKlU8TBeKESaFzfoc~6amBL1e77~Tbut-AxKgzWLu1jcNud6FdZXIKfj~ekpDD1FxbJlgmUiYHtCdNfpyhjrgHCiaxhE0sqQuW2ckB3ue2KqKo2C~ucWUR9A8nwKv11573osVPyRFY5cvBIQh9ILiXg2DNNpfg__"
          alt="Logo"
          fill
          className="absolute"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="z-[100] hidden md:block">
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => router.push("/about")}
        >
          About
        </span>
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => {
            if (handleEventsClick) {
              handleEventsClick();
            } else {
              router.push("/?tab=events");
            }
          }}
        >
          Events
        </span>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <div className="inline-flex cursor-pointer items-center text-lg font-bold text-white">
              <span>Downloads</span>
              <MdArrowDropDown className="ml-0.5 mr-7" />
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              onClick={() => {
                window && window.open("/Curriculam-Vitae.pdf");
              }}
            >
              Curriculum Vitae
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                window && window.open("/Eligibility-Certificate.pdf");
              }}
            >
              Eligibility Certificate
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                window &&
                  window.open(
                    "/Kritiutsav-Event-Rules-and-Regulations-Website.pdf"
                  );
              }}
            >
              Event Rules and Regulations
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                window && window.open("/CheckList-KritiUtsav.pdf");
              }}
            >
              CheckList
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => {
            if (handleContactClick) {
              handleContactClick();
            } else {
              router.push("/?tab=registrations");
            }
          }}
        >
          Registrations
        </span>
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => {
            if (handleContactClick) {
              handleContactClick();
            } else {
              router.push("/?tab=invitation");
            }
          }}
        >
          Invitation
        </span>
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => {
            if (handleContactClick) {
              handleContactClick();
            } else {
              router.push("/?tab=sponsors");
            }
          }}
        >
          Sponsors
        </span>
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => {
            if (handleContactClick) {
              handleContactClick();
            } else {
              router.push("/?tab=sponsors");
            }
          }}
        >
          Schedule
        </span>
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => {
            if (handleContactClick) {
              handleContactClick();
            } else {
              router.push("/?tab=messages");
            }
          }}
        >
          Messages
        </span>
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => {
            if (handleContactClick) {
              handleContactClick();
            } else {
              router.push("/?tab=judgemental");
            }
          }}
        >
          Judgemental Appeal
        </span>
        <span
          className="mr-7 cursor-pointer text-lg font-bold text-white"
          onClick={() => {
            if (handleContactClick) {
              handleContactClick();
            } else {
              router.push("/?tab=contact");
            }
          }}
        >
          Contact
        </span>
        <span
          className={`bg-custom-purple mr-7 cursor-pointer rounded-full text-lg font-bold text-white`}
          onClick={() => {
            if (isAuth) {
              router.push("/dashboard");
            } else {
              router.push("/login");
            }
          }}
        >
          {isAuth ? "Dashboard" : "Login"}
        </span>
      </div>
      <GiHamburgerMenu
        size={30}
        className="z-[100] cursor-pointer md:hidden"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      />
      <Drawer
        opened={openMenu}
        onClose={() => setOpenMenu(false)}
        position="left"
        size="75%"
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <div className="flex h-full flex-col items-center justify-center gap-16">
          <span
            className="text-custom-purple mr-5 cursor-pointer text-lg font-bold"
            onClick={() => router.push("/about")}
          >
            About
          </span>
          <span
            className="text-custom-purple mr-5 cursor-pointer text-lg font-bold"
            onClick={() => router.push("/?tab=events")}
          >
            Events
          </span>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <span className="text-custom-purple mr-5 cursor-pointer text-lg font-bold">
                Download
              </span>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                onClick={() => {
                  window && window.open("/Curriculam-Vitae.pdf");
                }}
              >
                Curriculum Vitae
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  window && window.open("/Eligibility-Certificate.pdf");
                }}
              >
                Eligibility Certificate
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  window &&
                    window.open(
                      "/Kritiutsav-Event-Rules-and-Regulations-Website.pdf"
                    );
                }}
              >
                Event Rules and Regulations
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  window && window.open("/CheckList-KritiUtsav.pdf");
                }}
              >
                CheckList
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <span
            className="text-custom-purple mr-5 cursor-pointer text-lg font-bold"
            onClick={() => router.push("/?tab=contact")}
          >
            Contact
          </span>
          <span
            className={`bg-custom-purple mr-5 cursor-pointer rounded-full text-lg font-bold text-white`}
            onClick={() => {
              if (isAuth) {
                router.push("/dashboard");
              } else {
                router.push("/login");
              }
            }}
          >
            {isAuth ? "Dashboard" : "Login"}
          </span>
        </div>
      </Drawer>
    </div>
  );
};
