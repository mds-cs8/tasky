import { IoHome } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { MdOutlineDownloadDone } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";

export const navMenu = [
  {
    id: 1,
    title: "كل المهام",
    icon: IoHome,
    path: "/",
  },
  {
    id: 2,
    title: "المهم",
    icon: CiBoxList,
    path: "/important",
  },
  {
    id: 3,
    title: "مكتمل",
    icon: MdOutlineDownloadDone,
    path: "/completed",
  },
  {
    id: 4,
    title: "غير مكتمل",
    icon: LuListTodo,
    path: "/uncompleted",
  },
];
