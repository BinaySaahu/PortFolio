"use client";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from '@mui/icons-material/Terminal';

export const info = [
  {
    img: <CodeOutlinedIcon />,
    title: "Frontend development",
    contents: [
      "HTML, CSS",
      "JAVASCRIPT",
      "TAILWIND CSS",
      "BOOTSTRAP",
      "REACT JS, NEXT JS",
    ],
  },
  {
    img: <StorageIcon />,
    title: "Backend development",
    contents: ["Node js", "Express js", "MongoDB", "SQL"],
  },
  {
    img: <TerminalIcon />,
    title: "Others",
    contents: [
      "C",
      "C++",
      "Java",
      "Data structures and algorithm",
      "Object oriented programming",
    ],
  },
];
