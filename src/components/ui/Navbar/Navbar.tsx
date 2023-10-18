// "use client";
// import { Button, Drawer, Layout, Menu, theme } from "antd";
// import { Content } from "antd/es/layout/layout";
// import Title from "antd/es/typography/Title";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { MenuOutlined } from "@ant-design/icons";
// import { useState } from "react";
// import auth from "@/firebase/firebase.auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useSignOut } from "react-firebase-hooks/auth";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { signOut } from "firebase/auth";
// import { setUser } from "@/redux/features/user/userSlice";

// const { Header } = Layout;

// const Navbar = ({
//   items,
// }: {
//   items: {
//     key: string;
//     label: string;
//     href: string;
//   }[];
// }) => {
//   const pathname = usePathname();

//   const [open, setOpen] = useState(false);

//   const { user } = useAppSelector((state) => state.user);

//   const dispatch = useAppDispatch();

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       dispatch(setUser(null));
//     });
//   };

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Layout className="layout">
//       <Header style={{ display: "flex", alignItems: "center" }}>
//         <Content>
//           <Link href="/">
//             <Title level={3} style={{ color: "white", marginBottom: 0 }}>
//               Beyond Hotel
//             </Title>
//           </Link>
//         </Content>
//         <Menu
//           className="lg:block hidden"
//           disabledOverflow
//           theme="dark"
//           mode="horizontal"
//           selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
//         >
//           {items?.map((item) => {
//             return (
//               <Menu.Item key={item.key}>
//                 <Link href={item.href}>{item.label}</Link>
//               </Menu.Item>
//             );
//           })}
//         </Menu>

//         {!user.email ? (
//           <>
//             <Link href="/login">
//               <Button type="primary">Login</Button>
//             </Link>
//             <Link
//               style={{
//                 marginLeft: "10px",
//               }}
//               href="/signup"
//             >
//               <Button type="primary">Sign Up</Button>
//             </Link>
//           </>
//         ) : (
//           <>
//             <Button type="text">
//               <Link
//                 href="/profile"
//                 style={{
//                   color: "#fff",
//                   textDecoration: "none",
//                 }}
//               >
//                 Dashboard
//               </Link>
//             </Button>
//             <Button onClick={handleLogout} danger>
//               Log Out
//             </Button>
//           </>
//         )}
//         {/* {!user ? (
//           <Link href="/login">
//             <Button type="primary">Login</Button>
//           </Link>
//         ) : (
//           <Button
//             onClick={async () => {
//               await signOut();
//             }}
//             danger
//           >
//             Log Out
//           </Button>
//         )} */}

//         <Button onClick={showDrawer} type="primary" className="lg:hidden">
//           <MenuOutlined />
//         </Button>
//         <Drawer
//           className="lg:hidden"
//           title="eLearning"
//           placement="right"
//           onClose={onClose}
//           open={open}
//         >
//           <Menu
//             disabledOverflow
//             theme="light"
//             mode="vertical"
//             selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
//           >
//             {items?.map((item) => {
//               return (
//                 <Menu.Item key={item.key}>
//                   <Link href={item.href}>{item.label}</Link>
//                 </Menu.Item>
//               );
//             })}
//           </Menu>
//         </Drawer>
//       </Header>
//     </Layout>
//   );
// };

// export default Navbar;
"use client";
import { Button, Drawer, Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut } from "firebase/auth";
import { setUser } from "@/redux/features/user/userSlice";

const { Header } = Layout;

const Navbar = ({
  items,
}: {
  items: {
    key: string;
    label: string;
    href: string;
  }[];
}) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout className="layout lg:px-36">
      <Header className="flex justify-between place-items-center">
        <Content>
          <Link href="/">
            <Title level={3} style={{ color: "white", marginBottom: 0 }}>
              <Image src={logo} alt={""} className=" md:w-56 sm:w-28" />
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden "
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
        >
          {items?.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>

        {!user.email ? (
          <>
            <Link href="/login">
              <Button type="primary">Login</Button>
            </Link>
            <Link
              style={{
                marginLeft: "10px",
              }}
              href="/signup"
            >
              <Button type="primary">Sign Up</Button>
            </Link>
          </>
        ) : (
          <>
            <Button type="text">
              <Link
                href="/profile"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Dashboard
              </Link>
            </Button>
            <Button onClick={handleLogout} danger>
              Log Out
            </Button>
          </>
        )}

        <Button onClick={showDrawer} type="primary" className="lg:hidden">
          <MenuOutlined />
        </Button>
        <Drawer
          className="lg:hidden mx-3"
          title="Beyond Hotel"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu
            disabledOverflow
            theme="light"
            mode="vertical"
            selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
          >
            {items?.map((item) => {
              return (
                <Menu.Item key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
