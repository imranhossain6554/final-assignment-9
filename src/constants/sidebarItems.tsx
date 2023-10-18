import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  ProfileOutlined,
  TableOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-hotels`}>Manage Users</Link>,
      icon: <TabletOutlined />,
      key: `/${role}/manage-hotels`,
    },
    {
      label: <Link href={`/${role}/manage-booking`}>Manage Booking</Link>,
      icon: <TabletOutlined />,
      key: `/${role}/manage-booking`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage My Booking",
      key: "manage-my-booking",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/my-booking`}>My Booking</Link>,
          key: `/${role}/my-booking`,
        },
      ],
    },
    {
      label: "Manage Testimonial",
      key: "manage-testimonials",
      icon: <TableOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/manage-testimonials`}>Testimonials</Link>
          ),
          key: `/${role}/testimonials`,
        },
      ],
    },
  ];
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage User",
      key: "manage-user",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/user-manage`}>Users</Link>,
          key: `/${role}/user-manage`,
        },
      ],
    },
    {
      label: "Manage Testimonial",
      key: "manage-testimonials",
      icon: <TableOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/manage-testimonials`}>Testimonials</Link>
          ),
          key: `/${role}/testimonials`,
        },
      ],
    },
  ];

  if (role === "user") return userSidebarItems;
  else if (role === "admin") return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
