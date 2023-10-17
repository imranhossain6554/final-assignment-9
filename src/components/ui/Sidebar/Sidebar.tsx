"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
const { Header, Content, Sider } = Layout;
const Sidebar = ({
  children,
  items,
}: {
  children: React.ReactNode;
  items: {
    key: string;
    label: string;
    href: string;
  }[];
}) => {
  const pathname = usePathname();
  return (
    <Layout>
      <Sider width={250} className="min-h-screen bg-gray-300">
        <Menu
          className="bg-transparent px-3 py-1 lg:block hidden"
          disabledOverflow
          theme="light"
          mode="inline"
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
      </Sider>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default Sidebar;
