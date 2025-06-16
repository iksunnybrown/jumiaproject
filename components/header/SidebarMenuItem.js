import Link from "next/link";

export default function SidebarMenuItem({ link, text, Icon, active, RightIcon }) {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-start text-sm space-x-3 hover:bg-gray-200 rounded-full">
      <Link href={`/category/${link}`}>
      <div className="flex items-center my-1 space-x-5">
       {/* {Icon && <Icon className="h-2" />} */}
        <Icon className="h-7" />
        <span className={`${active && "font-bold"} inline`}>{text}</span>
        </div>
      </Link>
    </div>
  );
}
// import Link from "next/link";

// export default function SidebarMenuItem({ link, text, Icon, active, RightIcon }) {
//   return (
//     <Link href={`/category/${link}`} className="hoverEffect flex items-center text-gray-700 justify-start text-sm hover:bg-gray-200 rounded-full p-2">
//       <div className="flex items-center space-x-5">
//         {Icon && <Icon className="h-2" />}
//         <span className={`${active && "font-bold"} flex-grow`}>{text}</span>
//         {RightIcon && <RightIcon className="h-2" />}
//       </div>
//     </Link>
//   );
// }