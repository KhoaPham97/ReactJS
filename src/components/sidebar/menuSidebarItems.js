const menuItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "dashboard",
    class: ""
  },
  {
    name: "Procurement",
    url: "/procurement",
    icon: "procurement",
    class: "itemBorderBottom",
    category: "Products",
    children: [
      {
        name: "Procurement",
        url: "/procurement",
        icon: "",
        class: "itemBorderBottom"
      }
    ]
  },
  {
    name: "Inventory",
    url: "/inventory",
    icon: "inventory",
    class: "itemBorderBottom",
    children: [
      {
        name: "Inventory",
        url: "/inventory",
        icon: "",
        class: "itemBorderBottom"
      },
      {
        name: "Inventory 1",
        url: "/inventory",
        icon: "",
        class: "itemBorderBottom"
      }
    ]
  },
  {
    name: "Voucher and Sale",
    url: "/voucher-and-sales",
    icon: "voucher-and-sales",
    class: "itemBorderBottom",
    children: [
      {
        name: "Voucher and Sale",
        url: "/voucher-and-sales",
        icon: "",
        class: "itemBorderBottom"
      }
    ]
  },
  {
    name: "Catalog",
    url: "/catalog",
    icon: "catalog",
    class: "itemBorderBottom"
  },
  {
    name: "End of Day",
    url: "/end-of-day",
    icon: "end-of-day",
    class: "itemBorderBottom"
  },
  {
    name: "Asset Transfer",
    url: "/asset-transfer",
    icon: "asset-transfer",
    class: "itemBorderBottom"
  },
  {
    name: "Manage Complaint",
    url: "/manage-complaint",
    icon: "manage-complaint",
    class: ""
  },

  {
    name: "User",
    url: "/user",
    icon: "user",
    class: "itemBorderBottom",
    category: "People"
  },
  {
    name: "User Role",
    url: "/user-role",
    icon: "user-role",
    class: "itemBorderBottom"
  },
  {
    name: "Master Data",
    url: "/master",
    icon: "user-role",
    class: "itemBorderBottom"
  }
];
export default menuItems;
